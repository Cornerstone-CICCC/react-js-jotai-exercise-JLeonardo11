import {  useState } from 'react'
import type {FormEvent} from 'react'
import { useAtom } from 'jotai'
import {
  personsAtom,
  numberOfPersonsAtom,
  firstPersonAtom,
  lastPersonAtom,
  adultPersonsAtom,
  minorPersonsAtom,
} from '../atoms/atom-Persons'

const Persons = () => {
  const [persons, setPersons] = useAtom(personsAtom)
  const [numberOfPersons] = useAtom(numberOfPersonsAtom)
  const [firstPerson] = useAtom(firstPersonAtom)
  const [lastPerson] = useAtom(lastPersonAtom)
  const [adultPersons] = useAtom(adultPersonsAtom)
  const [minorPersons] = useAtom(minorPersonsAtom)

  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(20)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!newName) return

    const newPerson = { name: newName, age: newAge }
    setPersons([...persons, newPerson])
    setNewName('')
    setNewAge(20)
  }

  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Jotai Persons Tracker</h2>

      <h3>Total Persons: {numberOfPersons}</h3>

      <ul className="list-disc list-inside">
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age}
          </li>
        ))}
      </ul>

      <div>
        <strong>First Person:</strong> {firstPerson.name}
      </div>
      <div>
        <strong>Last Person:</strong> {lastPerson.name}
      </div>

      <div>
        <h4 className="font-semibold mt-4">Adults (18+):</h4>
        <ul className="list-inside list-disc">
          {adultPersons.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mt-4">Minors (&lt;18):</h4>
        <ul className="list-inside list-disc">
          {minorPersons.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2 mt-4">
        <input
          className="border px-2 py-1 w-full"
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className="border px-2 py-1 w-full"
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(Number(e.target.value))}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add Person
        </button>
      </form>
    </div>
  )
}

export default Persons
