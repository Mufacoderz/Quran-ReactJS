type ProfileProps = {
    greeting: string;
    name: string;
    avatar: string;
}

function Profile ({greeting, name, avatar}: ProfileProps){
    return(
        <div className="flex justify-between">
            <div>
                <p className="text-left">{greeting}</p>
                <p className="text-left text-2xl font-bold">{name}</p>
            </div>
            <img src={avatar} alt="Profile user" className="h-10 w-10 rounded-full items-center" />
        </div>
    )
}

export default Profile;