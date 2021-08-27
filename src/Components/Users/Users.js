import React, { useContext } from 'react'
import { User } from './User'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import { useFetch} from '../../hooks/useFetch'

export const Users = () => {

    const {data} = useContext(GlobalContext)
    const loading = useFetch("https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow");

    return (
        <div className="user-section">
            <div className="users">
                {
                    !loading ? "Loading..."
                    : data.items.slice(0, 9).map((item) => {
                        return (
                            <User 
                                key={item.display_name}
                                userName={item.display_name}
                                profileImage={item.profile_image}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
