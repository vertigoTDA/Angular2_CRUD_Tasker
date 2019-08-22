export class Task {
    id: number;
    status: string;
    importance: number;
    date: Date;
    deadLine?: Date;
    creator: string;
    executor: string;
    executorPhotoPath?: string;
    title: string;
    taskBody?: string;
    notes?: string;
}
