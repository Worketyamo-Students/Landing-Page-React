import { HTMLProps, InputHTMLAttributes, ReactNode } from 'react'

interface IInput extends HTMLProps<InputHTMLAttributes<HTMLInputElement>>{
  label: string
  icon: ReactNode;
}

function Input(props: IInput) {
  return (
    <div className='flex flex-col gap-1 text-dark w-full'>
      <label htmlFor={props.id}> {props.label} </label>
      
      <div className="focus-within:border-primary flex gap-2 items-center py-4 px-5 border border-gray rounded-xl">
        {/* Icon  */}
        <div>
          {props.icon}
        </div>

        {/* Input  */}
        <input 
          id={props.id}
          className='text-lg outline-none'
          type={props.type}  
          placeholder={props.placeholder}
          required
          minLength={5}
          maxLength={25}
          autoComplete='off'
        />
      </div>
    </div>
  )
}

export default Input