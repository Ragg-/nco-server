export default class Payload<T, E>
{
    constructor(
        public type: T,
        public entity: E
    ) {}
}
