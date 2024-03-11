import { useState } from "react"
import { generateIpsum } from "../utils/ipsumGenerator"

function LandingSection() {
    const [wordCount, setWordCount] = useState("7")
    const [sentenceCount, setSentenceCount] = useState("4")
    const [paragraphCount, setParagraphCount] = useState("2")
    
    const [generatedIpsum, setGeneratedIpsum] = useState("")
    
    function generateNewIpsum() {

        const newIpsum = generateIpsum(parseInt(wordCount), parseInt(sentenceCount), parseInt(paragraphCount))
        console.log(newIpsum)
        setGeneratedIpsum(newIpsum)
        setTimeout(()=> changeHeight("text"), 0)
    }

    function changeHeight(id: string) {
        let elem = document.getElementById(id)
        if (!elem) {
            return
        }
        elem.style.height = String(elem.scrollHeight + 32)+"px";
    }

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        alert("Copied the text to the clipboard");
    }

    return (
        <div className="w-full flex flex-col items-center h-fit gap-8">
            <div className="w-full flex">
                <div className="max-w-[700px] relative text-center mx-auto">
                    <h1 className="text-5xl font-bold tracking-widest">
                        DESIGNER IPSUM
                    </h1>
                    <p className="text-3xl">
                        Because We Know You'd Rather Be Tweaking Kerning
                    </p>
                    <p className="font-thin tracking-wider leading-12 text-xl">
                        Look, we're not copywriters. But you're a visionary with a discerning eye for sans-serifs.
                        Designer Ipsum delivers just enough pretentious word salad to finesse that client pitch until
                        your real content arrives. No judgment here.
                    </p>
                </div>
            </div> 
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 w-full items-end">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Tokens per Sentence</span>
                    </label>
                    <input
                        className="input input-bordered w-full"
                        placeholder="words per sentence"
                        value={wordCount}
                        onChange={($event) => setWordCount($event.target.value)}
                    />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Sentences per Paragraph</span>
                    </label>
                    <input 
                        className="input input-bordered w-full"
                        placeholder="sentences per paragraph"
                        value={sentenceCount}
                        onChange={($event) => setSentenceCount($event.target.value)}
                    />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Paragraphs</span>
                    </label>
                    <input 
                        className="input input-bordered w-full"
                        placeholder="paragraphs"
                        value={paragraphCount}
                        onChange={($event) => setParagraphCount($event.target.value)}   
                    />
                </div>
                <button className="btn btn-primary w-full sm:w-fit mt-4 sm:mt-0" onClick={generateNewIpsum}>
                    Generate
                </button>
            </div>
            <div className="relative max-w-[740px] w-full my-12">
                { generatedIpsum.length > 0 &&
                    <button className="btn btn-xs btn-secondary absolute top-2 right-2" onClick={() => copyToClipboard(generatedIpsum)}>copy to clipboard</button>
                }
                <textarea placeholder="Generated Ipsum Goes Here" id="text" name="text" value={generatedIpsum} disabled></textarea>
            </div>
        </div>
    )
}

export default LandingSection