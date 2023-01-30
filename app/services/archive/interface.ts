export interface archiveTasks {
  outputTasks(): Promise<task[]>;
}

export interface task {
  date: string;
  name: string;
  previewUrl: string;
}
