
import './User.css'



function Users({ id, email, first_name, last_name, avatar, onClickInvite, isInvited }) {
    return (

        <div className='userContainer'>

            <img src={avatar} alt="" />

            <div>
                <h3>{first_name}{last_name} </h3>
                <p>{email}</p>
            </div>

            <span onClick={() => onClickInvite(id)} className='spanPlusMinus' > {isInvited ? '-' : '+'}</span>

        </div>
    )
}

export default Users
