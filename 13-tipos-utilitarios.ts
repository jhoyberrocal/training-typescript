interface Todo {
    title: string,
    description: string
}

type partial = Partial<Todo>;
type readOnlyT = Readonly<Todo>;

type t = NonNullable<string | undefined>;

type requiredpartial = Required<Todo>;

// Documentación utilitarios https://www.typescriptlang.org/docs/handbook/utility-types.html