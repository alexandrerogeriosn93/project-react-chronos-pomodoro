import { TaskModel } from "../models/TaskModel";

export type SortTasksOptions = {
  tasks: TaskModel[];
  direction?: "asc" | "desc";
  field?: keyof TaskModel;
};

export const sortTasks = ({
  field = "startDate",
  direction = "desc",
  tasks = [],
}: SortTasksOptions): TaskModel[] => {
  return [...tasks].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    /* 
     Se os dois forem nulos, mantemos a ordem atual
     Se apenas o primeiro for nulo, ele vai para o final
     Se apenas o segundo for nulo, ele vai para o final
    */
    if (aValue === null && bValue === null) return 0;
    if (aValue === null) return 1;
    if (bValue === null) return -1;

    // Se os dois valores forem números, fazemos uma subtração para ordenar
    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    // Se os dois valores forem textos, usamos localeCompare para comparar em ordem alfabética
    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    // Se não for nem número, nem string, nem null, não alteramos a ordem
    return 0;
  });
};
