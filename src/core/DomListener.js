import { capitalize } from "./utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error("No $root provided from DOMListener.");
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDomListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            if (!this[method]) {
                const name = this.name || "";
                throw new Error(
                    `Method ${method} is not implemented in ${
                        name || ""
                    } Component`
                );
            }
            this[method] = this[method].bind(this);
            this.$root.on(listener, this[method]);
        });
    }

    removeDomListeners() {
        console.log("this.removeDomListeners()");
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            console.log("this.removeDomListeners()", method);

            this.$root.off(listener, this[method]);
        });
    }
}

function getMethodName(eventName) {
    return "on" + capitalize(eventName);
}
