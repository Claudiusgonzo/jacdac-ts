import React from "react"
import { makeStyles, createStyles, Theme, Collapse } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
// tslint:disable-next-line: no-submodule-imports
import ListItem from '@material-ui/core/ListItem';
// tslint:disable-next-line: no-submodule-imports
import List from '@material-ui/core/List';
// tslint:disable-next-line: no-submodule-imports
import ListItemIcon from '@material-ui/core/ListItemIcon';
// tslint:disable-next-line: no-submodule-imports
import ListItemText from '@material-ui/core/ListItemText';
import { useStaticQuery, graphql } from "gatsby"
// tslint:disable-next-line: no-submodule-imports
import TreeView from '@material-ui/lab/TreeView';
// tslint:disable-next-line: no-submodule-imports
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// tslint:disable-next-line: no-submodule-imports
import TreeItem from '@material-ui/lab/TreeItem';

interface TocNode {
    name: string;
    path: string;
    children?: TocNode[];
    expanded?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

function treeifyToc(toc: TocNode[]) {
    toc = toc.slice(0)
    // reconstruct tree
    const tocNodes: { [index: string]: TocNode } = {};
    toc.forEach(node => tocNodes[node.path.replace(/\/$/, '')] = node);
    toc.forEach((node, index) => {
        const parts = node.path.replace(/\/$/, '').split("/");
        parts.pop();
        while (parts.length) {
            const parentPath = `${parts.join("/")}`;
            const parent = tocNodes[parentPath]
            if (parent) {
                if (!parent.children) parent.children = [];
                parent.children.push(node)
                toc[index] = undefined;
                break;
            }
            parts.pop();
        }
    })
    toc = toc.filter(node => !!node);
    return {
      tree: toc,
      nodes: tocNodes
    }
}

export default function Toc() {
    const classes = useStyles();
    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMdx {
      edges {
        node {
          headings {
            value
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }

    allSpecJson {
      nodes {
        name
        shortId
      }
    }

  }
`)

    // convert pages into tree
    let toc: TocNode[] = [{
      name: "Home",
      path: "/",
      children: [],
      expanded: true
    }]
    data.allMdx.edges
        .filter(node => !!node.node.headings.length && !/404/.test(node.node.headings[0].value))
        .map(node => {
            return {
                name: node.node.headings[0].value,
                path: node.node.fields.slug,
                children: []
            }
        })
        .forEach(node => toc.push(node))

    data.allSpecJson.nodes.map(node => {
        return {
            name: node.name,
            path: `/services/${node.shortId}`
        }
    }).forEach(node => toc.push(node))

    const { tree, nodes } = treeifyToc(toc)

    return <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={Object.keys(nodes)}
    >
        {tree.map(entry => <TocListItem key={'toc' + entry.path} entry={entry} />)}
    </TreeView>

    function TocListItem(props: { entry: TocNode }) {
        const { entry } = props;
        const sub = !!entry.children && !!entry.children.length;

        return <TreeItem
            key={'tocitem' + entry.path} 
            nodeId={entry.path.replace(/\/$/, '')}
            label={<Link to={entry.path}>
                <ListItemText primary={entry.name} />
            </Link>}>
            {sub && entry.children.map(child => <TocListItem key={'toc' + child.path} entry={child} />)}
        </TreeItem>
    }
}