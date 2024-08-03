export default class Task {
    private readonly _id: number;
    private _title: string;
    private _description: string;

    constructor(id: number | null, title: string, description: string) {
        this._id = id || 0;
        this._title = title;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle.trim() || 'Title';
    }

    get description() {
        return this._description;
    }

    set description(newDescription: string) {
        this._description = newDescription.trim();
    }
}
