import PropTypes from 'prop-types'

const Button = ({ text }) => {
return  <button className='btn'>{text}</button>
}

Button.defaultProps = {
    text: 'Add',
}


Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button