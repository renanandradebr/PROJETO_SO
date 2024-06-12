import './checkbutton.css'

function Checkbox({ isChecked, handleCheckboxChange, type }) {
  // Cria uma função para o componente CheckBox
  return (
    <form action="">
      <label class="form-control">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {isChecked ? `${type}` : `${type}`}
      </label>
    </form>
  )
}

export default Checkbox
