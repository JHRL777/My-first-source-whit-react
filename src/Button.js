
import PropTypes from 'prop-types'

export function Button ({name}){

    if(name=== "boton1"){
        return <button>Mi primer boto</button>
    }else{
    return  <button>
        {name}
    </button>}

}

Button.propTypes={
    name: PropTypes.string
}