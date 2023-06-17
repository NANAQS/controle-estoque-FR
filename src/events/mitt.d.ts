declare module "mitt" {
  type EmitterEvents = Record<string | symbol | any>;

  export default function mitt<
    Events extends EmitterEvents = EmitterEvents
  >(): {
    on<T extends keyof Event>(
      type: T,
      handler: (event: Events[T]) => void
    ): void;
    off<T extends keyof Event>(
      type: T,
      handler: (event: Events[T]) => void
    ): void;
    emmit<T extends keyof Event>(type: T, event: Events[T]): void;
  };
}
