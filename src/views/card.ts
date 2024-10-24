import { bindable } from "aurelia";

export class Card  {
    @bindable() visible : boolean;
    @bindable() symbol : string;
    public matched : boolean;
}