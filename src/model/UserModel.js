class User
{
    constructor(name, password, content, exercises)
    {
        this.name = name
        this.password = password
        this.content = content
        this.exercises = exercises
    }
}

export class Exercise
{

    constructor(name,reps)
    {
        this.name = name
        this.reps = reps
    }


}

export default User