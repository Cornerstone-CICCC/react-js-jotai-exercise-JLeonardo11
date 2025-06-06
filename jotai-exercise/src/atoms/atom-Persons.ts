import { atom } from 'jotai'

type Person = {
  name: string
  age: number
}

export const personsAtom = atom<Person[]>([
  { name: 'Joe', age: 35 },
  { name: 'Jane', age: 21 },
  { name: 'Eve', age: 15 },
])

export const numberOfPersonsAtom = atom((get) => get(personsAtom).length)

export const firstPersonAtom = atom((get) => get(personsAtom)[0])

export const lastPersonAtom = atom((get) => {
  const persons = get(personsAtom)
  return persons[persons.length - 1]
})

export const adultPersonsAtom = atom((get) =>
  get(personsAtom).filter((person) => person.age >= 18)
)

export const minorPersonsAtom = atom((get) =>
  get(personsAtom).filter((person) => person.age < 18)
)
