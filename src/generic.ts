const searchStr = "foo";
const hasSearchedString = any<string>((el: string) => el.contains(searchStr), [
  "fooooo",
  "bar",
  "baz",
]);

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface manyInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const many: manyInterface<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user2: manyInterface<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
};

// const result = addId<manyInterface>(many);
// console.log("result", result);