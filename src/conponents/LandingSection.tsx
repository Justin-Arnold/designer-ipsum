import { useState } from "react"
import { generateIpsum } from "../utils/ipsumGenerator"

function LandingSection() {
    const [wordCount, setWordCount] = useState("")
    const [sentenceCount, setSentenceCount] = useState("")
    const [paragraphCount, setParagraphCount] = useState("")
    
    const [generatedIpsum, setGeneratedIpsum] = useState("")
    
    function generateNewIpsum() {

        const newIpsum = generateIpsum(parseInt(wordCount), parseInt(sentenceCount), parseInt(paragraphCount))
        console.log(newIpsum)
        setGeneratedIpsum(newIpsum)
    }

    return (
        <div className="w-full@ my-16 space-y-2">
            <h1 className="text-5xl font-bold">
                DESIGNER IPSUM
            </h1>
            <p className="text-3xl">
                Because We Know You'd Rather Be Tweaking Kerning
            </p>
            <p className="font-thin text-xl">
                Look, we're not copywriters. But you're a visionary with a discerning eye for sans-serifs.
                Designer Ipsum delivers just enough pretentious word salad to finesse that client pitch until
                your real content arrives. No judgment here.
            </p>
            <div className="flex flex-col gap-4 pt-8 overflow-hidden">
                <input 
                    className="input input-bordered"
                    placeholder="words per sentence"
                    value={wordCount}
                    onChange={($event) => setWordCount($event.target.value)}
                />
                <input 
                    className="input input-bordered"
                    placeholder="sentences per paragraph"
                    value={sentenceCount}
                    onChange={($event) => setSentenceCount($event.target.value)}
                />
                <input 
                    className="input input-bordered" 
                    placeholder="paragraphs"
                    value={paragraphCount}
                    onChange={($event) => setParagraphCount($event.target.value)}   
                />
                <button className="btn btn-primary" onClick={generateNewIpsum}>
                    Generate
                </button>

                <pre className="text-wrap">{generatedIpsum}</pre>
            </div>
        </div>
    )
}

export default LandingSection