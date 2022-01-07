//import {reactive} from 'vue'

export default class Instance
{
    public data:any

    constructor (private resource,private key)
    {
        this.data = this.resource.cache[key]
    }

    //dependeces in a static

    get name()
    {
        return this.data.name
    }

    save()
    {
        this.resource.save()
    }

    delete()
    {
        this.resource.delete(this.key)
    }
}


