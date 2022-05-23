const arr = [
    "6 Specifications (73)",
    "--3000 VA Model Specification with PPDM (73)",
    "--Prestige 3000 UPS Physical Specifications (73)",
    "--Prestige 3000 UPS Technical Specifications (74)",
    "--Part Numbers (75)",
    "---Base Equipment (75)",
    "---Standard Accessories (75)"
    ]
    
    let result = []
    let child1 = []
    // let child2 = []
    
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].startsWith("-")) {
            let parent = {
                "name": "",
                "type": "h2"
            }
    
            result.push(parent)
            // console.log(result);
    
        }
        if(arr[i].startsWith("---")) {
            let child11 = {
                "name": "Paragraph 1.1",
                "type": "h4"
            }
            child1.push(child11)
            // console.log(child1);
        }
        else {
            let child22 = {
                "name": "Paragraph 1.1",
                "type": "h3"
            }
            parent.childrent = child22
            parent.push(parent.childrent)
        }
            child1.childrent = [child1]
            child1.push(child1.childrent)
            result.push(push.childrent = [child22])
    }
    
console.log(result);