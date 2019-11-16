//import * as React from 'react'
import React, {useState} from 'react'

type Option = {
  value: string,
  label: string
}

const options: Option[] = [
  {value: '111', label: '111'},
  {value: '222', label: '222'},
  {value: '333', label: '223'}
]

export default function Hello() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  function searchKeyword(keyword: string) {
    const found = options.filter(it => it.label.startsWith(keyword));
    setSelectedValues(found.map(it => it.value));
  }

  return <div>
    <h1>Select Options by Typing</h1>
    <div>
      <div><input type="text" onChange={event => searchKeyword(event.target.value)}/></div>
      <div>
        <select multiple value={selectedValues}>
          {
            options.map(({value, label}) =>
              <option key={value} value={value}>{label}</option>)
          }
        </select>
      </div>
    </div>
  </div>
};
