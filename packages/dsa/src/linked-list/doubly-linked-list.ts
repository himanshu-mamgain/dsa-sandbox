export interface Song {
    id: string;
    title: string;
    artist: string;
    duration: number; // in seconds
    coverUrl?: string;
}

export class Node<T> {
    value: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class DoublyLinkedList<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    length: number = 0;

    append(value: T): void {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    delete(value: T): void {
        if (!this.head) return;

        let current = this.head;
        while (current) {
            if (current.value === value) { // Simple reference equality or primitive equality
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                    else this.tail = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) this.tail.next = null;
                    else this.head = null;
                } else {
                    if (current.prev) current.prev.next = current.next;
                    if (current.next) current.next.prev = current.prev;
                }
                this.length--;
                return;
            }
            if (current.next === null) break;
            current = current.next;
        }
    }

    find(predicate: (value: T) => boolean): Node<T> | null {
        let current = this.head;
        while (current) {
            if (predicate(current.value)) return current;
            current = current.next;
        }
        return null;
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

export class Playlist extends DoublyLinkedList<Song> {
    currentSong: Node<Song> | null = null;

    play(songId?: string) {
        if (songId) {
            const node = this.find(s => s.id === songId);
            if (node) this.currentSong = node;
        } else if (!this.currentSong && this.head) {
            this.currentSong = this.head;
        }
        return this.currentSong ? this.currentSong.value : null;
    }

    next(): Song | null {
        if (this.currentSong && this.currentSong.next) {
            this.currentSong = this.currentSong.next;
            return this.currentSong.value;
        }
        return null; // End of playlist
    }

    prev(): Song | null {
        if (this.currentSong && this.currentSong.prev) {
            this.currentSong = this.currentSong.prev;
            return this.currentSong.value;
        }
        return null;
    }
}
