import { JDDevice } from "./device";
import { Packet } from "./packet";
import { serviceName } from "./pretty";
import { JDRegister } from "./register";
import { CMD_REG_MASK, PACKET_RECEIVE, PACKET_SEND, CMD_GET_REG } from "./constants";
import { JDNode } from "./node";
import { serviceSpecificationFromClassIdentifier } from "./spec";

export class JDService extends JDNode {
    private _registers: JDRegister[];
    private _specification: jdspec.ServiceSpec = null;

    constructor(
        public readonly device: JDDevice,
        public readonly service_number: number
    ) {
        super()
    }

    get id() {
        return `srv:${this.device.id}:${this.service_number.toString(16)}`
    }

    get serviceClass() {
        return this.device.serviceClassAt(this.service_number);
    }

    get name() {
        return serviceName(this.serviceClass)
    }

    /**
     * Gets the specification of the service. Undefined if unknown
     */
    get specification() {
        if (this._specification === null)
            this._specification = serviceSpecificationFromClassIdentifier(this.serviceClass)
        return this._specification;
    }

    toString() {
        return `${this.name} ${this.id}`;
    }

    register(address: number | { address: number }) {
        const a = (typeof address == "number" ? address : address.address) | 0;
        if (!this._registers)
            this._registers = [];
        let register = this._registers[a];
        if (!register)
            register = this._registers[a] = new JDRegister(this, a);
        return register;
    }

    sendPacketAsync(pkt: Packet) {
        pkt.dev = this.device;
        pkt.service_number = this.service_number;
        this.emit(PACKET_SEND, pkt)
        return pkt.sendCmdAsync(this.device);
    }

    sendCmdAsync(cmd: number) {
        const pkt = Packet.onlyHeader(cmd);
        return this.sendPacketAsync(pkt)
    }

    processPacket(pkt: Packet) {
        this.emit(PACKET_RECEIVE, pkt)
        if (pkt.is_report && pkt.service_command & CMD_GET_REG) {
            const address = pkt.service_command & CMD_REG_MASK
            const reg = this.register({ address })
            if (reg)
                reg.processReport(pkt);
        }
    }
}
