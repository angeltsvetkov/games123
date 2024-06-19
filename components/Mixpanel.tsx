'use client'
import { useEffect } from "react"
import { Mixpanel } from "../utils/mixpanel"


const MixpanelComponent = (props:any) => {

    useEffect(() => {
        Mixpanel.track(props.name, props.data)
    }, [props.data, props.name])

    return props.children
}
export default MixpanelComponent