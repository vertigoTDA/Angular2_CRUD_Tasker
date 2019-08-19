export class Task {
    id: number;
    status: string;
    importance: number;
    date: Date;
    deadEnd?: Date;
    creator: string;
    executor: string;
    executorPhotoPath?: string;
    title: string;
    taskBody?: string;
    notes?: string;
}
