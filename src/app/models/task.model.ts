export class Task {
    id: number;
    status: string;
    importance: number;
    date: Date;
    deadLine?: Date;
    creator: string;
    executor: number;
    executorPhotoPath?: string;
    title: string;
    taskBody?: string;
    notes?: string;
}
