function getCfopDescription(type: string, code: string): string {
    const consumoMap: Map<string, string> = new Map([
        ["5401", "CFOP 1407"],
        ["5403", "CFOP 1407"],
        ["5405", "CFOP 1407"],
        ["6401", "CFOP 2407"],
        ["6403", "CFOP 2407"],
        ["6404", "CFOP 2407"],
        ["5101", "CFOP 1556"],
        ["5102", "CFOP 1556"],
        ["6404", "CFOP 1556"],
        ["6101", "CFOP 2556"],
        ["6102", "CFOP 2556"],
    ]);

    const industrializacaoMap: Map<string, string> = new Map([
        ["5401", "CFOP 1401"],
        ["5403", "CFOP 1401"],
        ["5405", "CFOP 1401"],
        ["6401", "CFOP 2401"],
        ["6403", "CFOP 2401"],
        ["6404", "CFOP 2401"],
        ["5101", "CFOP 1101"],
        ["5102", "CFOP 1101"],
        ["6101", "CFOP 2101"],
        ["6102", "CFOP 2101"],
    ]);

    const revendaMap: Map<string, string> = new Map([
        ["5401", "CFOP 1403"],
        ["5403", "CFOP 1403"],
        ["5405", "CFOP 1403"],
        ["6401", "CFOP 2401"],
        ["6403", "CFOP 2403"],
        ["6404", "CFOP 2403"],
        ["5101", "CFOP 1102"],
        ["5102", "CFOP 1102"],
        ["6101", "CFOP 2102"],
        ["6102", "CFOP 2102"],
    ]);

    let cfopOutput = "";
    switch (type) {
        case "consumo":
            cfopOutput = consumoMap.get(code) || "CFOP INVALIDO";
            break;
        case "industrialização":
            cfopOutput = industrializacaoMap.get(code) || "CFOP INVALIDO";
            break;
        case "revenda":
            cfopOutput = industrializacaoMap.get(code) || "CFOP INVALIDO";
            break;
    }


    return cfopOutput
}

export default getCfopDescription;
