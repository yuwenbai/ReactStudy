import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-select'
import './Toast.scss'
const CommoBxo = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }
  const CustomOption = props => {
    const { innerProps, isDisabled, isFocused, isSelected, data, className, cx, getStyles } = props
    return !isDisabled
      ? <div
        css={getStyles('option', props)}
        className={cx(
          {
            option: true,
            'option--is-disabled': isDisabled,
            'option--is-focused': isFocused,
            'option--is-selected': isSelected
          },
          className
        )}
        {...innerProps}>
        <div style={{ width: '100px', height: '40px' }}>
          <div style={{ color: 'red', left: '30px', position: 'absolute' }}>{data.value}</div>
        </div>
      </div>
      : null
  }
  return (
    // <div style={{width:'200px',height:'10px'}}>
    <Select
      name="form-field-name"
      className="react-select-container"
      classNamePrefix="react-select"
      value={selectedOption}
      onChange={handleChange}
      // menuIsOpen={true}
      components={{ Option: CustomOption }}
      options={[
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
      ]}
    />
    // </div>
  );
}
export default CommoBxo

// class Toast extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     debugger
//     const { title, content, btn, callback } = this.props
//     debugger
//     return (
//       <div className="toast">
//         <div className="box">
//           <div className="title">{title}</div>
//           <div className="content">{content}</div>
//           <div className="btn" onClick={callback}>{btn}</div>
//         </div>
//       </div>
//     )
//   }
// }

// export default options => {
//   let { title, content, btn, callback } = options || {}
//   debugger
//   let div = document.createElement('div')
//   document.body.appendChild(div)
//   ReactDOM.render(React.createElement(Toast, {
//     title: title || "Tips",
//     content: content || "contents here",
//     btn: btn || "confirm",
//     callback: () => {
//       callback && callback instanceof Function && callback()
//       document.body.removeChild(div)
//     }
//   }), div)
// }