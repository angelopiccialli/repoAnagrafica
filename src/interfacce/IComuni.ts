export interface IComuni {
    regioni: { 
        province: { 
            code: string; 
            comuni: { 
                code: string; 
                cap: string; 
                nome: string; 
            }[],
            nome: string
        }[],
        nome: string
    }[]
}