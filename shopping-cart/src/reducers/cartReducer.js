export const initialState = []
export function cartReducer(list = initialState, action = {}) {
    switch (action.type) {
        case 'added': {
            if(list.findIndex(item => item.id == action.producto.id)>=0) return list
            else return [...list, action.producto]
        }
        case 'emptied': {
            return []
        }
        case 'deleted': {
            return list.filter(response => response.id != action.id);
        }
        case 'incremented': {
            return list.map(response => {
                if (response.id == action.id) {
                    const aumento = response.cantidad + 1
                    return { ...response, cantidad: aumento }
                }
                return response
            })
        }
        case 'decreased': {
            return list.map(response => {
                if (response.id == action.id && response.cantidad >1) {
                    const disminuir = response.cantidad - 1
                    return { ...response, cantidad: disminuir }
                }
                return response
            })
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }
}