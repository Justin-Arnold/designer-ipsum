const ipsumWords = [
    "Curated",
    "Intentional",
    "Disruptive",
    "Experiential",
    "Bespoke",
    "Organic",
    "Paradigm",
    "Aesthetic",
    "Leverage",
    "Frictionless",
    "Microinteraction",
    "Omnichannel",
    "Skeuomorphic",
    "Metaverse",
    "Intuitive",
    "Immersive",
    "Beyond the fold",
    "Elevating the user journey",
    "Design-forward thinking",
    "Outside-the-box ideation",
    "Boldly minimalist",
    "Pushing the pixel",
    "Celebrating negative space",
    "It just pops",
    "Bleeding-edge typography",
    "Palette as protagonist",
    "The semiotics of simplicity",
    "Data-driven, human-centered",
    "Emotion meets function",
    "Where form follows feeling",
    "Design is empathy made visual",
    "Seamlessly disruptive",
    "Intentionally organic",
    "Iterative refinement",
    "Elevating the visual hierarchy",
    "Celebrating the whitespace",
    "Bauhaus meets blockchain",
    "Disrupting the color wheel",
    "Pixel-perfect precision",
    "Typography with attitude",
    "Wireframes as poetry",
    "The unbearable beauty of brutalism",
    "Skeuomorphism's ironic renaissance",
    "Questioning the grid",
    "It's not a button, it's an invitation",
    "User-centric empathy mapping",
    "Seamless onboarding experience",
    "Micro-moments of delight",
    "Design-driven desirability",
    "Pain points? Never heard of them.",
    "Frictionless conversion funnels",
    "The emotional affordances of color",
    "Quantifying the qualitative",
    "Storytelling through scroll depth",
    "Haptic",
    "Aspirational",
    "Dissonant",
    "Intuitive",
    "Intentional",
    "Fluid",
    "Granular",
    "Visceral",
    "Sculptural",
    "Tactile",
    "Immersive",
    "Modular",
    "Cognitive",
    "Behavioral",
    "Frictionless",
    "Learnability",
    "Heuristic",
    "Delightful",
    "Conversion",
    "Sticky",
    "Affordance",
    "Disrupt",
    "Elevate",
    "Robust",
    "Scalable",
    "Ecosystem",
    "Synergy",
    "Leverage",
    "Iterate",
    "Optimize",
    "Roadmap",
    "Archetypal",
    "Semiotic",
    "Paradigm",
    "Zeitgeist",
    "Meta",
    "Dichotomy",
    "Juxtaposition",
    "Liminal",
    "Ephemeral",
    "Deconstruct"
];



function generateIpsum(wordCount: number, sentenceCount: number, paragraphCount: number): string {
    
    const generatedParagraphs: string[] = []

    for (let p = 0; p < paragraphCount; p++) {
        const generatedSentences: string[] = []

        for (let i = 0; i < sentenceCount; i++) {
            const s = generateSentence(wordCount)

            generatedSentences.push(s)
        }

        generatedParagraphs.push(generatedSentences.join(" "))
    }
    
    return generatedParagraphs.join("\n\n")
}

function generateSentence(wordCount: number): string {
    let generatedWords: string[] = []

    for (let wordIndex = 0; wordIndex < wordCount; wordIndex++) {
        const randomIndex = Math.floor(Math.random() * ipsumWords.length)
        generatedWords.push(ipsumWords[randomIndex].toLowerCase())
    }

    let generatedSentence = generatedWords.join(" ")
    generatedSentence = capitalizeFirstLetter(generatedSentence)
    generatedSentence = generatedSentence + '.'

    return generatedSentence
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
    generateIpsum
}
