import { NavigationActions } from 'react-navigation'

export function push (routeName, params) {
    return NavigationActions.navigate({ routeName, params })
}

export function reset (routeName, params) {
    return NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName, params})
        ]
    })
}