// =============================================
// DATA SOAL - 234 SOAL LENGKAP
// =============================================
const quizData = [
    // --- SECTION 1: STRUCTURE & WRITTEN (1-20) ---
    { section: "structure", qNum: 1, q: "__________ team sports require cooperation.", a:"c", exp:"Determiner 'all' diperlukan sebelum plural countable nouns.", o:{a:"of all", b:"they are all", c:"all", d:"why are all"} },
    { section: "structure", qNum: 2, q: "Anyone who has ever pulled weeds from a garden __________ roots firmly anchor plants to the soil.", a:"b", exp:"'Anyone' (singular) butuh verb 'is'. 'That' mengawali klausa baru.", o:{a:"is well aware of", b:"is well aware that", c:"well aware", d:"well aware that"} },
    { section: "structure", qNum: 3, q: "Centuries of erosion have exposed __________ rock surfaces in the Painted Desert of northern Arizona.", a:"c", exp:"Compound adjective 'rainbow-colored' paling tepat menerangkan rock surfaces.", o:{a:"in colors of the rainbow", b:"colored like a rainbow", c:"rainbow-colored", d:"a rainbow's coloring"} },
    { section: "structure", qNum: 4, q: "The higher the temperature of a molecule, __________.", a:"a", exp:"Double comparative: The higher..., the more energy...", o:{a:"the more energy it has", b:"than it has more energy", c:"more energy has it", d:"it has more energy"} },
    { section: "structure", qNum: 5, q: "Frontier surgeon Ephrain MacDonald had to perform operation __________ anesthesia.", a:"c", exp:"Tanpa pembiusan = 'without anesthesia'.", o:{a:"no", b:"not having", c:"without", d:"there wasn't"} },
    { section: "structure", qNum: 6, q: "__________ young, chimpanzees are easily trained.", a:"b", exp:"Reduced clause: 'When (they are) young'.", o:{a:"when are", b:"when", c:"they are", d:"when they"} },
    { section: "structure", qNum: 7, q: "A person of __________ age may suffer from defects of vision.", a:"d", exp:"'Any' merujuk kepada usia berapapun.", o:{a:"every", b:"some", c:"certain", d:"any"} },
    { section: "structure", qNum: 8, q: "__________ have settled, one of their first concerns has been to locate an adequate water supply.", a:"a", exp:"'Wherever people' mengawali klausa keterangan tempat.", o:{a:"wherever people", b:"there are people who", c:"whether people", d:"people"} },
    { section: "structure", qNum: 9, q: "If a bar magnet is __________, the two pieces form two complete magnets, each with a north and south pole.", a:"a", exp:"Passive voice: is + broken (V3).", o:{a:"broken", b:"broke", c:"breaking", d:"break"} },
    { section: "structure", qNum: 10, q: "The type of plant and animal life... depends on the soil of the pond, __________, and the pond's location.", a:"c", exp:"Parallel structure: soil, quality, location.", o:{a:"what the quality of the water is", b:"how is the water quality", c:"the quality of the water", d:"what is the water quality"} },
    { section: "structure", qNum: 11, q: "The architectural style of the new building is __________ of the many diverse influences in the city.", a:"a", exp:"Adjective 'representative' tepat untuk melengkapi subjek.", o:{a:"representative", b:"represent", c:"representing", d:"represents"} },
    { section: "structure", qNum: 12, q: "Not only __________ to determine the depth of the ocean, but it also helps map the ocean floor.", a:"b", exp:"Inversion setelah 'Not only': Auxiliary + Subject.", o:{a:"sonar is used", b:"is sonar used", c:"sonar used", d:"does sonar used"} },
    { section: "structure", qNum: 13, q: "__________ the high cost of production, the film was a major success at the box office.", a:"a", exp:"'Despite' diikuti noun phrase untuk menunjukkan kontras.", o:{a:"Despite", b:"Although", c:"In spite", d:"Even though"} },
    { section: "structure", qNum: 14, q: "The committee members __________ the proposal for several hours before reaching a final decision.", a:"c", exp:"Present Perfect Continuous menekankan durasi kegiatan.", o:{a:"has discussed", b:"was discussing", c:"have been discussing", d:"discussing"} },
    { section: "structure", qNum: 15, q: "Rarely __________ such a beautiful sunset in this part of the country.", a:"b", exp:"Inversion setelah adverbial negatif 'Rarely'.", o:{a:"one sees", b:"does one see", c:"one has seen", d:"seeing"} },
    { section: "structure", qNum: 16, q: "Ceramics can be harder, <span class='underline'>light</span> (A), and more <span class='underline'>resistant</span> (B) to <span class='underline'>heat</span> (C) than <span class='underline'>metals</span> (D).", a:"a", exp:"Kesejajaran: 'light' harus 'lighter' agar sejajar dengan 'harder'.", o:{a:"light", b:"resistant", c:"heat", d:"metals"} },
    { section: "structure", qNum: 17, q: "<span class='underline'>Not everyone</span> (A) realizes <span class='underline'>that</span> (B) the <span class='underline'>most largest</span> (C) organ of the <span class='underline'>human</span> (D) body is the skin.", a:"c", exp:"Superlative ganda: 'most largest' redundan. Cukup 'the largest'.", o:{a:"Not everyone", b:"that", c:"most largest", d:"human"} },
    { section: "structure", qNum: 18, q: "Mold is <span class='underline'>extremely</span> (A) <span class='underline'>destruction</span> (B) <span class='underline'>to books</span> (C) in <span class='underline'>a library</span> (D).", a:"b", exp:"'destruction' (noun) seharusnya 'destructive' (adj).", o:{a:"extremely", b:"destruction", c:"to books", d:"a library"} },
    { section: "structure", qNum: 19, q: "Sidney Lanier <span class='underline'>achieved</span> (A) fame both <span class='underline'>as a</span> (B) poet <span class='underline'>or</span> (C) as a symphony <span class='underline'>musician</span> (D).", a:"c", exp:"'both...and' bukan 'both...or'.", o:{a:"achieved", b:"as a", c:"or", d:"musician"} },
    { section: "structure", qNum: 20, q: "<span class='underline'>The horses</span> (A) used <span class='underline'>play</span> (B) polo are not of any <span class='underline'>special</span> (C) breed or of any <span class='underline'>definite</span> (D) size.", a:"b", exp:"'play' seharusnya 'to play' (infinitif tujuan).", o:{a:"The horses", b:"play", c:"special", d:"definite"} },
    { section: "structure", qNum: 21, q: "A tapestry <span class='underline'>consists of</span> (A) a foundation weave, called the warp, <span class='underline'>which</span> (B) across are passed different <span class='underline'>colored</span> (C) threads, called the weft, forming decorative <span class='underline'>patterns</span> (D).", a:"b", exp:"Seharusnya 'across which' — preposisi sebelum relative pronoun.", o:{a:"consists of", b:"which", c:"colored", d:"patterns"} },
    { section: "structure", qNum: 22, q: "The <span class='underline'>works</span> (A) of early American woodcarvers <span class='underline'>had many</span> (B) artistic qualities, but these craftsmen probably <span class='underline'>did not</span> (C) think of <span class='underline'>them</span> (D) as artists.", a:"d", exp:"'them' seharusnya 'themselves' (refleksif).", o:{a:"works", b:"had many", c:"did not", d:"them"} },
    { section: "structure", qNum: 23, q: "Perhaps mankind's <span class='underline'>first</span> (A) important <span class='underline'>musical</span> (B) influence <span class='underline'>were</span> (C) the songs of <span class='underline'>birds</span> (D).", a:"c", exp:"'influence' singular → 'was' bukan 'were'.", o:{a:"first", b:"musical", c:"were", d:"birds"} },
    { section: "structure", qNum: 24, q: "The techniques of science and <span class='underline'>magic</span> (A) are quite <span class='underline'>different</span> (B), but their basic aims—<span class='underline'>to understand</span> (C) and control nature—<span class='underline'>they are</span> (D) very similar.", a:"d", exp:"Redundansi subjek 'they' — hapus.", o:{a:"magic", b:"different", c:"to understand", d:"they are"} },
    { section: "structure", qNum: 25, q: "It was in a cave near Magdalena, New Mexico, <span class='underline'>when</span> (A) the <span class='underline'>oldest</span> (B) <span class='underline'>known</span> (C) ears of cultivated corn were <span class='underline'>discovered</span> (D).", a:"a", exp:"'when' → 'where' (tempat).", o:{a:"when", b:"oldest", c:"known", d:"discovered"} },
    { section: "structure", qNum: 26, q: "The fossil remains of <span class='underline'>much</span> (A) extinct <span class='underline'>mammals</span> (B) have been <span class='underline'>found</span> (C) <span class='underline'>in</span> (D) the tar pits at Rancho La Brea in Los Angeles.", a:"a", exp:"'mammals' countable → 'many'.", o:{a:"much", b:"mammals", c:"found", d:"in"} },
    { section: "structure", qNum: 27, q: "Sharks <span class='underline'>can detect</span> (A) minute <span class='underline'>electrical</span> (B) discharges <span class='underline'>coming</span> (C) from <span class='underline'>its</span> (D) prey.", a:"d", exp:"'Sharks' plural → 'their'.", o:{a:"can detect", b:"electrical", c:"coming", d:"its"} },
    { section: "structure", qNum: 28, q: "A dark nebula consists of <span class='underline'>a cloud of</span> (A) interstellar dust <span class='underline'>enough dense</span> (B) <span class='underline'>to obscure</span> (C) the stars <span class='underline'>beyond</span> (D) it.", a:"b", exp:"Urutan benar: 'dense enough'.", o:{a:"a cloud of", b:"enough dense", c:"to obscure", d:"beyond"} },
    { section: "structure", qNum: 29, q: "<span class='underline'>Commercially</span> (A) honey is heated and <span class='underline'>filtered</span> (B) in order to <span class='underline'>stabilize</span> (C) and clarify <span class='underline'>it</span> (D).", a:"a", exp:"'Commercially' → 'Commercial' (adj).", o:{a:"Commercially", b:"filtered", c:"stabilize", d:"it"} },
    { section: "structure", qNum: 30, q: "The <span class='underline'>various</span> (A) parts of the body require <span class='underline'>so</span> (B) different <span class='underline'>surgical</span> (C) skills that <span class='underline'>many</span> (D) surgical specialties have developed.", a:"b", exp:"'so' → 'such' (such + adj + plural noun).", o:{a:"various", b:"so", c:"surgical", d:"many"} },
    { section: "structure", qNum: 31, q: "One reason birds <span class='underline'>have been</span> (A) so successful is <span class='underline'>because of</span> (B) their <span class='underline'>able</span> (C) to escape from danger <span class='underline'>quickly</span> (D).", a:"c", exp:"'able' (adj) → 'ability' (noun).", o:{a:"have been", b:"because of", c:"able", d:"quickly"} },
    { section: "structure", qNum: 32, q: "The <span class='underline'>wood</span> (A) of the rosewood tree <span class='underline'>is used</span> (B) to <span class='underline'>do</span> (C) fine <span class='underline'>musical</span> (D) instruments.", a:"c", exp:"'do' → 'make'.", o:{a:"wood", b:"is used", c:"do", d:"musical"} },
    { section: "structure", qNum: 33, q: "Chemical engineering is based <span class='underline'>on</span> (A) the <span class='underline'>principles</span> (B) of physics, <span class='underline'>chemists</span> (C), and <span class='underline'>mathematics</span> (D).", a:"c", exp:"Parallel: 'chemists' → 'chemistry'.", o:{a:"on", b:"principles", c:"chemists", d:"mathematics"} },
    { section: "structure", qNum: 34, q: "Ballet performers <span class='underline'>must be</span> (A) believable <span class='underline'>actors</span> (B) and actresses <span class='underline'>as well</span> (C) as <span class='underline'>experts</span> (D) dancers.", a:"d", exp:"'experts' → 'expert' (adj modifier).", o:{a:"must be", b:"actors", c:"as well", d:"experts"} },
    { section: "structure", qNum: 35, q: "Venus, <span class='underline'>the second</span> (A) planet <span class='underline'>from</span> (B) the Sun, is <span class='underline'>exactly almost</span> (C) the <span class='underline'>same size as</span> (D) the Earth.", a:"c", exp:"'exactly almost' → 'almost exactly'.", o:{a:"the second", b:"from", c:"exactly almost", d:"same size as"} },
    { section: "structure", qNum: 36, q: "P T. Barnum opened <span class='underline'>his own</span> (A) circus in 1871 and <span class='underline'>become</span> (B) the <span class='underline'>most famous</span> (C) showman of his <span class='underline'>time</span> (D).", a:"b", exp:"'become' → 'became' (past tense).", o:{a:"his own", b:"become", c:"most famous", d:"time"} },
    { section: "structure", qNum: 37, q: "The way a child <span class='underline'>plays with</span> (A) other children reveals <span class='underline'>a lots</span> (B) about <span class='underline'>the child's</span> (C) emotional <span class='underline'>development</span> (D).", a:"b", exp:"'a lots' → 'a lot'.", o:{a:"plays with", b:"a lots", c:"the child's", d:"development"} },
    { section: "structure", qNum: 38, q: "Sheep <span class='underline'>have been</span> (A) <span class='underline'>domesticated</span> (B) for <span class='underline'>over</span> (C) 5,000 <span class='underline'>years ago</span> (D).", a:"d", exp:"'for...ago' tidak bisa bersamaan.", o:{a:"have been", b:"domesticated", c:"over", d:"years ago"} },
    { section: "structure", qNum: 39, q: "Chemical compounds <span class='underline'>with</span> (A) barium, cobalt, and strontium <span class='underline'>are</span> (B) responsible <span class='underline'>to</span> (C) many of the vivid <span class='underline'>colors</span> (D) in fireworks.", a:"c", exp:"'responsible to' → 'responsible for'.", o:{a:"with", b:"are", c:"to", d:"colors"} },
    { section: "structure", qNum: 40, q: "Duke University in North Carolina <span class='underline'>has</span> (A) an outstanding <span class='underline'>collecting</span> (B) of documents <span class='underline'>concerning</span> (C) Southern <span class='underline'>history</span> (D).", a:"b", exp:"'collecting' → 'collection' (noun).", o:{a:"has", b:"collecting", c:"concerning", d:"history"} },
    { section: "structure", qNum: 41, q: "The <span class='underline'>most</span> (A) <span class='underline'>successfully</span> (B) entrepreneurs are those who <span class='underline'>can</span> (C) adapt quickly <span class='underline'>to</span> (D) changing markets.", a:"b", exp:"'successfully' → 'successful' (adj).", o:{a:"most", b:"successfully", c:"can", d:"to"} },
    { section: "structure", qNum: 42, q: "Neither the quality <span class='underline'>nor</span> (A) the price <span class='underline'>of</span> (B) the goods <span class='underline'>were</span> (C) acceptable <span class='underline'>to</span> (D) the customers.", a:"c", exp:"'neither...nor' ikut subjek terdekat ('the price' → 'was').", o:{a:"nor", b:"of", c:"were", d:"to"} },
    { section: "structure", qNum: 43, q: "The <span class='underline'>number</span> (A) of students <span class='underline'>attending</span> (B) the seminar <span class='underline'>are</span> (C) increasing <span class='underline'>every</span> (D) year.", a:"c", exp:"'The number of' → singular → 'is'.", o:{a:"number", b:"attending", c:"are", d:"every"} },
    { section: "structure", qNum: 44, q: "If I <span class='underline'>was</span> (A) you, I <span class='underline'>would</span> (B) take <span class='underline'>the</span> (C) opportunity to study <span class='underline'>abroad</span> (D).", a:"a", exp:"Conditional type 2: 'If I were'.", o:{a:"was", b:"would", c:"the", d:"abroad"} },

    // --- SECTION 2: READING 1 ---
    { section: "reading", passageImg: "soal1sampai9.png", q: "1. According to the passage, when did the United States experience a brief depression?", a:"d", o:{a:"In the late nineteenth century", b:"Before the First World War", c:"During the First World War", d:"In the early 1920's"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "2. The word 'boom' in line 5 is closest in meaning to:", a:"c", o:{a:"noise", b:"strike", c:"expansion", d:"market"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "3. The phrase 'called for' in line 10 is closest in meaning to:", a:"b", o:{a:"named", b:"required", c:"described", d:"considered"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "4. Growth in automobile production caused increase in demand for:", a:"a", o:{a:"rubber", b:"clothing", c:"electric power", d:"radios"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "5. All were relatively new in 1920s EXCEPT:", a:"a", o:{a:"steel", b:"radios", c:"automobiles", d:"refrigerators"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "6. The word 'host' in line 17 means:", a:"d", o:{a:"entertainer", b:"sample", c:"investment", d:"large number"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "7. Inferred characters in novel are:", a:"a", o:{a:"wealthy people", b:"farmers", c:"writers", d:"average citizens"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "8. Inferred about US farms in 1920s:", a:"d", o:{a:"Rapid growth", b:"Attracted workers", c:"Gasoline benefit", d:"Less prosperous than other businesses"} },
    { section: "reading", passageImg: "soal1sampai9.png", q: "9. Paragraph following most likely discusses:", a:"c", o:{a:"Fitzgerald's life", b:"Consumer costs", c:"Economic condition of farms", d:"Popular novels"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "10. What does the passage mainly discuss?", a:"d", o:{a:"Parts of piano", b:"Kinds of pianos", c:"Composers", d:"The popularity of the piano"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "11. The word 'place' in line 1 means:", a:"c", o:{a:"performance", b:"region", c:"position", d:"arrangement"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "12. The word 'it' in line 2 refers to:", a:"a", o:{a:"piano", b:"place", c:"music", d:"band"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "13. The word 'central' in line 14 means:", a:"b", o:{a:"accessible", b:"important", c:"convenient", d:"related"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "14. Inferred about piano industry between 1861-1914:", a:"b", o:{a:"Fewer built", b:"Many wanted to learn", c:"Keyboard invention", d:"Bands replaced piano"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "15. The word 'virtuoso' in line 19 means:", a:"c", o:{a:"youthful", b:"dedicated", c:"skilled", d:"noble"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "16. The word 'themselves' in line 22 refers to:", a:"c", o:{a:"pianos", b:"compositions", c:"older ticklers", d:"techniques"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "17. Why audiences amazed by ticklers?", a:"b", o:{a:"No music looking", b:"Exciting performances", c:"Younger", d:"Accompanied"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "18. NOT true of professional players:", a:"a", o:{a:"Trained in Europe", b:"Appealed to audiences", c:"Little formal training", d:"More skilled at popular music"} },
    { section: "reading", passageImg: "soal10sampai19.png", q: "19. Paragraph following discusses:", a:"d", o:{a:"classical music", b:"competitions", c:"instruction", d:"jazz piano music"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "20. What does the passage mainly discuss?", a:"b", o:{a:"Early drawings", b:"The history of flight", c:"Ornithopters", d:"Ancient myths"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "21. The word 'sporadic' in line 3 means:", a:"c", o:{a:"scientific", b:"successful", c:"occasional", d:"courageous"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "22. Problem with ornithopter?", a:"d", o:{a:"Poorly constructed", b:"Hold one person", c:"Launched high", d:"Required more strength than human provide"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "23. The word 'it' in line 8 refers to:", a:"c", o:{a:"source", b:"motion", c:"ornithopter", d:"power"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "24. The word 'buoyed' in line 11 means:", a:"d", o:{a:"collapsed", b:"designed", c:"attempted", d:"raised"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "25. The word 'it' in line 13 refers to:", a:"b", o:{a:"balloon", b:"warm air", c:"bag", d:"paper"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "26. Inferred about gliders before 19th century?", a:"c", o:{a:"No transport", b:"Hot air relied", c:"Not well designed", d:"Long airborne"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "27. Statement supported by passage:", a:"a", o:{a:"Humans fascinated with flying", b:"Dependent on bird imitation", c:"Steady evolution", d:"Gliders preferred to balloons"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "28. Where mentions historical account?", a:"a", o:{a:"Lines 4-6", b:"Lines 9-11", c:"Lines 17-18", d:"Lines 22-23"} },
    { section: "reading", passageImg: "soal20sampai29.png", q: "29. Passage probably continues with:", a:"b", o:{a:"dangers", b:"airplane development", c:"glider similarity", d:"ornithopter improvement"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "30. The word 'It' in line 2 refers to:", a:"a", o:{a:"Comstock Lode", b:"history", c:"productivity", d:"peak"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "31. The word 'scattered' in line 4 means:", a:"b", o:{a:"combined", b:"spread out", c:"identified", d:"preserved"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "32. Where describes a lode?", a:"a", o:{a:"Lines 4-6", b:"Lines 10-11", c:"Lines 13-16", d:"Lines 21-22"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "33. Main idea of second paragraph?", a:"b", o:{a:"Most successful mines", b:"Severe problems affecting operation", c:"Railroad profit", d:"Thousands employed"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "34. The word 'hampered' in line 11 means:", a:"d", o:{a:"overwhelmed", b:"deepened", c:"prolonged", d:"disrupted"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "35. The word 'acute' in line 12 means:", a:"c", o:{a:"fiery", b:"unsolvable", c:"serious", d:"sensitive"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "36. Signaled by hot igneous rock?", a:"d", o:{a:"Flooding", b:"Uneven deposits", c:"Low water", d:"Continuing mineralization"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "37. Purpose of Sutro Tunnel?", a:"a", o:{a:"Relieve flooding and bring air", b:"Miners transport", c:"Pump out hot water", d:"Ore transport"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "38. The word 'obstacles' in line 24 means:", a:"d", o:{a:"injuries", b:"objects", c:"qualifications", d:"difficulties"} },
    { section: "reading", passageImg: "soal30sampai39.png", q: "39. Comparison to railroad project because:", a:"c", o:{a:"Quick", b:"Young workers", c:"Challenging", d:"Money lost"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "40. What does the passage mainly discuss?", a:"b", o:{a:"Sounds", b:"Characteristics of one kind of bird", c:"Insects", d:"Damage"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "41. The word 'excavate' in line 1 means:", a:"a", o:{a:"dig", b:"protect", c:"clean", d:"investigate"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "42. The word 'that' in line 4 refers to:", a:"c", o:{a:"hole", b:"chamber", c:"wood", d:"supply"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "43. Identified by:", a:"c", o:{a:"Melody", b:"Nest design", c:"Drumming pattern", d:"Beak size"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "44. The word 'interval' in line 12 means:", a:"b", o:{a:"note", b:"pause", c:"call", d:"tapping"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "45. 'As well as' in line 14 means:", a:"a", o:{a:"besides", b:"easily", c:"after", d:"instead of"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "46. Wryneck differs because it does NOT:", a:"d", o:{a:"long tongue", b:"noise", c:"build nest", d:"rigid tail"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "47. The word 'which' in line 19 refers to:", a:"b", o:{a:"acorns", b:"holes", c:"trunks", d:"skills"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "48. The word 'massive' in line 21 means:", a:"c", o:{a:"secret", b:"potential", c:"huge", d:"fresh"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "49. NOT mentioned eating insects:", a:"d", o:{a:"Sapsucker", b:"Green woodpecker", c:"Wryneck", d:"Acorn woodpecker"} },
    { section: "reading", passageImg: "soal40sampai50.png", q: "50. Sapsucker behavior different how?", a:"d", o:{a:"ground search", b:"no drilling", c:"stores food", d:"chooses sap trees"} },

    // --- SECTION 3: READING 2 ---
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "1. What is the primary purpose of this passage?", a:"d", exp:"Passage details stages of sun's life in future.", o:{a:"To alert people to the dangers posed by the sun", b:"To discuss conditions on Earth in the far future", c:"To present a theory about red giant stars", d:"To describe changes that the sun will go through"} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "2. The word fueled in paragraph 1 is closest in meaning to", a:"a", exp:"fueled = powered.", o:{a:"powered.", b:"bombarded.", c:"created.", d:"Propelled."} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "3. What does the word 'They' refer to?", a:"b", exp:"'They' refers to thermonuclear reactions.", o:{a:"hydrogen and helium", b:"thermonuclear reactions", c:"the sun and earth", d:"size and brightness"} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "4. Where would this sentence best fit? 'It maintains its size because the heat deep inside the sun produces pressure that offsets the force of gravity.'", a:"d", exp:"Posisi (4) — sebelum 'This balance of forces...'.", o:{a:"(1)", b:"(2)", c:"(3)", d:"(4)"} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "5. It can be inferred from the passage that the sun", a:"a", exp:"Approximately halfway through life as yellow dwarf.", o:{a:"is approximately halfway through its life as a yellow dwarf.", b:"has been in existence for 10 billion years.", c:"is rapidly changing in size and brightness.", d:"will continue as a yellow dwarf for another 10 billion years."} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "6. Which word is most nearly OPPOSITE to 'core'?", a:"a", exp:"core vs surface.", o:{a:"surface", b:"interior", c:"temperature", d:"rate"} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "7. What will probably be the first stage of change as the sun becomes a red giant?", a:"d", exp:"Core shrinks and becomes hotter.", o:{a:"The core will cool off and use less fuel.", b:"The surface will become hotter and shrink.", c:"The sun will throw off huge amounts of gases.", d:"The core will grow smaller and hotter."} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "8. When the sun becomes a red giant, what will conditions be like on Earth?", a:"c", exp:"Temperatures too hot for life.", o:{a:"Its atmosphere will freeze and become solid.", b:"It will be enveloped in the expanding surface of the sun.", c:"It will become too hot for life to exist.", d:"It will be destroyed in nova explosions."} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "9. As a white dwarf, the sun will be", a:"b", exp:"Thousands of times smaller than today.", o:{a:"the same size as the planet Mercury.", b:"thousands of times smaller than it is today.", c:"around 35 million miles in diameter.", d:"cold and dark."} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "10. Best sequence of stages the sun will pass through?", a:"c", exp:"Yellow dwarf → red giant → white dwarf → black dwarf.", o:{a:"Yellow dwarf, white dwarf, red giant, black giant", b:"Red giant, white dwarf, black dwarf, nova explosion", c:"Yellow dwarf, red giant, white dwarf, black dwarf", d:"White giant, red giant, black dwarf, yellow dwarf"} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "11. The phrase throw off in paragraph 3 is closest in meaning to", a:"a", exp:"throw off = eject.", o:{a:"eject.", b:"burn up.", c:"convert.", d:"let in."} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "12. What does 'there' refer to?", a:"c", exp:"'there' refers to the earth.", o:{a:"the sun", b:"a black dwarf", c:"the earth", d:"atmosphere"} },
    { section: "reading2", passageImg: "soal1sampai13section2.png", q: "13. Which best describes the tone?", a:"d", exp:"Scientific, dispassionate, objective.", o:{a:"Alarmed", b:"Pessimistic", c:"Comic", d:"Objective"} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "14. Why does the author mention George Washington?", a:"b", exp:"He was involved in pioneering canal efforts.", o:{a:"He was President at the time the Erie Canal was built.", b:"He was involved in pioneering efforts to build canals.", c:"He successfully opened the first canal in the United States.", d:"He commissioned engineers to study the possibility of building the Erie Canal."} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "15. The word feasibility in paragraph 1 is closest in meaning to", a:"c", exp:"feasibility = possibility.", o:{a:"profitability.", b:"difficulty.", c:"possibility.", d:"capability."} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "16. Which word is closest in meaning to 'means'?", a:"d", exp:"means = method.", o:{a:"feasibility", b:"settlers", c:"waterways", d:"method"} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "17. According to the passage, the Erie Canal connected the", a:"b", exp:"Hudson River and Lake Erie.", o:{a:"Potomac and Ohio Rivers.", b:"Hudson River and Lake Erie.", c:"Delaware and Potomac Rivers.", d:"Atlantic Ocean and the Hudson River"} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "18. Which phrase is closest in meaning to 'halted'?", a:"d", exp:"halted = put an end to.", o:{a:"comparatively small", b:"estimated", c:"on-again-off-again", d:"put an end to"} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "19. 'on-again-off-again' could be replaced by", a:"a", exp:"on-again-off-again = Intermittent.", o:{a:"Intermittent", b:"Unsolicited", c:"Ineffectual", d:"Gradual"} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "20. The completion of the Erie Canal was financed by", a:"a", exp:"New York (state) financed.", o:{a:"New York.", b:"private companies.", c:"the federal government.", d:"DeWitt Clinton."} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "21. The actual cost of building the Erie Canal was", a:"c", exp:"$7 million (actual).", o:{a:"$5 million.", b:"less than had been estimated.", c:"$7 million.", d:"more than could be repaid."} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "22. The word tolls in paragraph 4 is closest in meaning to", a:"d", exp:"tolls = Fees.", o:{a:"Jobs", b:"Grants", c:"Links", d:"Fees"} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "23. Which is NOT given as an effect of the Erie Canal?", a:"d", exp:"It did NOT establish Boston/Philadelphia as centers.", o:{a:"It allowed the East coast to trade with the Great Lakes area.", b:"It took water traffic away from the Mississippi River.", c:"It helped determine the outcome of the Civil War.", d:"It established Boston and Philadelphia as the most important centers of trade."} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "24. What can be inferred about railroads in 1849?", a:"c", exp:"Railroads had begun to compete with the canal.", o:{a:"They were being planned but had not yet been built.", b:"They were seriously underdeveloped.", c:"They had begun to compete with the Erie Canal for traffic.", d:"They were weakened by the expansion of the canal."} },
    { section: "reading2", passageImg: "soal14sampai25section2.png", q: "25. The word warranted in paragraph 5 is closest in meaning to", a:"b", exp:"warranted = justified.", o:{a:"guaranteed.", b:"justified.", c:"hastened.", d:"prevented."} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "26. Which is the main topic of the passage?", a:"d", exp:"Main topic: sounds made by trees.", o:{a:"The vibrations produced by insects", b:"The mission of the U.S. Forest Service", c:"The effect of insects on trees", d:"The sounds made by trees"} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "27. The word them in paragraph 1 refers to", a:"a", exp:"'them' = trees.", o:{a:"trees.", b:"scientists.", c:"insects.", d:"vultures."} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "28. Which word is closest in meaning to 'drawn'?", a:"c", exp:"drawn = attracted.", o:{a:"sickened", b:"heard", c:"attracted", d:"dying"} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "29. Which word is closest in meaning to 'parched'?", a:"c", exp:"parched = drought-stricken.", o:{a:"vibrations", b:"moisture", c:"drought-stricken", d:"kilohertz range"} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "30. The word plight in paragraph 2 is closest in meaning to", a:"b", exp:"plight = condition.", o:{a:"cry.", b:"condition.", c:"need.", d:"presence."} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "31. Which sentence explains how researchers conducted their experiment?", a:"b", exp:"They fastened sensors to bark.", o:{a:"Researchers hypothesized that these sounds were caused by a severe lack of moisture.", b:"They fastened electronic sensors to the bark of drought-stricken trees.", c:"According to one of the scientists, most parched trees transmit their plight.", d:"The unaided human ear can detect no more than 20 kilohertz."} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "32. It can be inferred that the sounds produced by trees", a:"c", exp:"Cannot be heard by unaided human ear.", o:{a:"serve as a form of communication among trees.", b:"are the same no matter what type of tree produces them.", c:"cannot be heard by the unaided human ear.", d:"fall into the 1-20 kilohertz range."} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "33. Which word is closest in meaning to 'fractured'?", a:"b", exp:"fractured = cracked.", o:{a:"surmise", b:"cracked", c:"length", d:"vibration"} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "34. Which is believed to be a cause of the trees' distress signals?", a:"d", exp:"Lack of water.", o:{a:"Torn roots", b:"Attacks by insects", c:"Experiments by scientists", d:"Lack of water"} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "35. What does 'they' refer to?", a:"c", exp:"'they' = insects.", o:{a:"columns", b:"patterns", c:"insects", d:"trees"} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "36. 'pick up' could best be replaced by", a:"a", exp:"pick up = Perceive.", o:{a:"Perceive", b:"Lift", c:"Transmit", d:"Attack"} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "37. All mentioned as factors EXCEPT", a:"d", exp:"Color changes not mentioned.", o:{a:"thermal changes.", b:"smells.", c:"sounds.", d:"changes in color."} },
    { section: "reading2", passageImg: "soal26sampai38section2.png", q: "38. Research on tree distress signals at the time of writing was", a:"c", exp:"Research was continuing.", o:{a:"had been conducted many years previously.", b:"had been unproductive up until then.", c:"was continuing.", d:"was no longer sponsored by the government."} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "39. The author's main purpose is to", a:"b", exp:"Analyze an important film.", o:{a:"criticize the factory system of the 1930s.", b:"analyze an important film.", c:"explain Chaplin's style of acting.", d:"discuss how film reveals the benefits of technology."} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "40. Chaplin got idea for Modern Times from a", a:"d", exp:"Conversation with reporter.", o:{a:"newspaper article.", b:"scene in a movie.", c:"job he had once held.", d:"conversation with a reporter."} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "41. Which word is closest in meaning to 'jammed'?", a:"b", exp:"jammed = packed.", o:{a:"destroyed", b:"packed", c:"jostling", d:"narrow"} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "42. Two thirds of the film", a:"b", exp:"Takes place outside factory.", o:{a:"is extremely unforgettable.", b:"takes place outside a factory.", c:"is more critical than the other third.", d:"entertains the audience more than the other third."} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "43. Which is most nearly OPPOSITE to 'biting'?", a:"b", exp:"biting vs gentle.", o:{a:"tone", b:"gentle", c:"lecture", d:"audience"} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "44. Best replace for 'losing his mind'?", a:"c", exp:"Going insane.", o:{a:"Getting fired", b:"Doing his job", c:"Going insane", d:"Falling behind"} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "45. Where would this sentence best fit? 'All at once, this feeding device begins to malfunction.'", a:"c", exp:"Posisi (3).", o:{a:"(1)", b:"(2)", c:"(3)", d:"(4)"} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "46. What does 'their' refer to?", a:"a", exp:"'their' = people's.", o:{a:"people's", b:"machines", c:"needs", d:"assembly line"} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "47. Purpose of the feeding machine scene is to show people's", a:"c", exp:"Helplessness.", o:{a:"ingenuity.", b:"adaptability.", c:"helplessness.", d:"independence."} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "48. utter in paragraph 3 is closest in meaning to", a:"b", exp:"utter = complete.", o:{a:"Notable", b:"Complete", c:"Regrettable", d:"Necessary"} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "49. Which word is closest in meaning to 'faults'?", a:"a", exp:"faults = flaws.", o:{a:"flaws", b:"context", c:"message", d:"sentiments"} },
    { section: "reading2", passageImg: "soal39sampai50section2.png", q: "50. The author would use all EXCEPT", a:"a", exp:"'revolutionary' — film does NOT offer radical message.", o:{a:"revolutionary.", b:"entertaining.", c:"memorable.", d:"satirical."} },

    // --- SECTION 4: LISTENING ---
    { section: "listening", q: "1. <br><b>(man)</b> I'm taking six courses this semester.<br><b>(woman)</b> Maybe you should cut down next term.<br><b>(narrator)</b> What does the woman suggest the man do?", a:"c", exp:"'cut down' = take fewer courses.", o:{a:"Stay home for a while.", b:"Find easier classes.", c:"Take fewer courses in the future.", d:"Look downstairs to find the classroom."} },
    { section: "listening", q: "2. <br><b>(man)</b> Joyce, did you borrow my ruler?<br><b>(woman)</b> No, Bill did.<br><b>(narrator)</b> What happened to the ruler?", a:"b", exp:"Bill took it.", o:{a:"Joyce used it.", b:"Bill took it.", c:"Joyce fixed it.", d:"Bill lost it."} },
    { section: "listening", q: "3. <br><b>(woman)</b> I think it'll be hard for me to write that paper 'cause I'm so tired.<br><b>(man)</b> Why don't you do it later on in the day after you've rested?<br><b>(narrator)</b> What does the man suggest?", a:"a", exp:"Rest first, then write.", o:{a:"Get some rest now and write the paper later.", b:"Read the paper before she rests.", c:"Wait and work on the paper the following day.", d:"Write the paper now before it's too late."} },
    { section: "listening", q: "4. <br><b>(man)</b> I'm looking for a nice quiet place to spend two weeks. Can you help me?<br><b>(woman)</b> We have several brochures here that you can take home to look at.<br><b>(narrator)</b> What does the woman mean?", a:"d", exp:"She can give information.", o:{a:"The man should take home some souvenirs.", b:"She will make a reservation for the man.", c:"The man should relax at home.", d:"She can give the man some information."} },
    { section: "listening", q: "5. <br><b>(woman)</b> The weather's been so hot and humid this week.<br><b>(man)</b> Hasn't it though!<br><b>(narrator)</b> What does the woman mean?", a:"a", exp:"Man agrees.", o:{a:"He agrees with the woman.", b:"He hasn't been here this week.", c:"He likes hot weather.", d:"He doesn't know what the temperature is."} },
    { section: "listening", q: "6. <br><b>(man)</b> I thought we might try that new pizza place tonight.<br><b>(woman)</b> Wouldn't you prefer somewhere a little more elegant?<br><b>(narrator)</b> What does the woman imply?", a:"c", exp:"She doesn't like pizza idea.", o:{a:"She doesn't like pizza.", b:"She'd rather stay home.", c:"She doesn't like the man's idea.", d:"The man prefers to try new restaurants."} },
    { section: "listening", q: "7. <br><b>(woman)</b> I was thinking about going to the opening performance of the new play Friday night.<br><b>(man)</b> You'd better do more than think about it if you're serious. There might not be any tickets left by then.<br><b>(narrator)</b> What does the man suggest?", a:"b", exp:"Buy ASAP.", o:{a:"Wait unit Friday to buy a ticket.", b:"Buy a ticket as soon as possible.", c:"See the play on a different night.", d:"Invite a friend to the play."} },
    { section: "listening", q: "8. <br><b>(woman)</b> Did you know it's almost five?<br><b>(man)</b> Five! It can't be!<br><b>(narrator)</b> What does the man mean?", a:"c", exp:"He thought it was earlier.", o:{a:"He usually leaves at five.", b:"He's glad it's finally five o'clock.", c:"He thought it was earlier.", d:"He knew the clock was inaccurate."} },
    { section: "listening", q: "9. <br><b>(woman)</b> The cafeteria is serving cheese sandwiches for lunch today.<br><b>(man)</b> I'm glad we made plans to go somewhere else.<br><b>(narrator)</b> What does the man imply?", a:"c", exp:"Cafeteria menu doesn't appeal.", o:{a:"He doesn't feel like waiting in line today.", b:"Sandwiches will be served at the restaurant he chose.", c:"The cafeteria menu doesn't appeal to him.", d:"He only made plans for the two of them."} },
    { section: "listening", q: "10. <br><b>(woman)</b> Your new table is gorgeous. It must have been expensive.<br><b>(man)</b> A little, I guess.<br><b>(narrator)</b> What does the man say?", a:"b", exp:"It was expensive.", o:{a:"It is a small table.", b:"It was expensive.", c:"He didn't expect it to be so large.", d:"He doesn't know how much it cost."} },
    { section: "listening", q: "11. <br><b>(woman)</b> The graduation luncheon has been set for the last Thursday of the semester.<br><b>(man)</b> Oh, really? I'll have to change it on my calendar.<br><b>(narrator)</b> What had the man assumed?", a:"a", exp:"Different day assumed.", o:{a:"It would be on a different day.", b:"It would be later in the semester.", c:"It would be cancelled.", d:"It would be at a different time."} },
    { section: "listening", q: "12. <br><b>(man)</b> I need this prescription filled as soon as possible?<br><b>(woman)</b> Do you want that in tablet or liquid?<br><b>(narrator)</b> What does the woman ask?", a:"c", exp:"Which form preferred.", o:{a:"If she can take a liquid.", b:"What the prescription is for.", c:"Which form of the medicine he prefers.", d:"How much of the medicine he needs."} },
    { section: "listening", q: "13. <br><b>(man)</b> How could I be so absentminded? I left my wallet at home again.<br><b>(woman)</b> It just so happens I have twenty dollars I don't need until tonight.<br><b>(narrator)</b> What does the woman mean?", a:"d", exp:"She can lend money.", o:{a:"She can't lend the man any money.", b:"She has more than twenty dollars.", c:"She can't go out tonight.", d:"She can lend the man some money."} },
    { section: "listening", q: "14. <br><b>(woman)</b> I wish you'd try harder to be on time.<br><b>(man)</b> There's no need for you to talk to me like that.<br><b>(narrator)</b> What can be inferred about the man?", a:"d", exp:"He is annoyed.", o:{a:"He didn't expect the woman to be so late.", b:"He didn't want the woman to know he was late.", c:"He is sorry that he is late.", d:"He is annoyed that the woman is scolding him."} },
    { section: "listening", q: "15. <br><b>(woman)</b> What's going on at the theater? There's not usually a crowd like that on weeknights.<br><b>(man)</b> There's a special promotion going on: two people get in for the price of one.<br><b>(narrator)</b> What does the man mean?", a:"c", exp:"Ticket price lower than usual.", o:{a:"Tickets are more expensive at night.", b:"The theater is always crowded.", c:"The ticket price is lower than usual.", d:"There is a long line for foreign films."} },
    { section: "listening", q: "16. <br><b>(man)</b> Hi Barbara. Have you gotten used to campus life yet?<br><b>(woman)</b> I guess I have, but you are the first person I've run into all day who knows my name.<br><b>(narrator)</b> What can be inferred?", a:"c", exp:"She is a new student.", o:{a:"She is very busy.", b:"She has lots of friends.", c:"She is a new student.", d:"She doesn't like the man."} },
    { section: "listening", q: "17. <br><b>(woman)</b> I'm really sorry I had to cancel our plans again.<br><b>(man)</b> At first I was angry ... but actually, you did me a favor. I took care of a lot of work that'd been backing up.<br><b>(narrator)</b> What does the man imply?", a:"b", exp:"He is happy she cancelled.", o:{a:"He is still angry.", b:"He is happy the woman cancelled.", c:"He is too busy to go out.", d:"He finished his work."} },
    { section: "listening", q: "18. <br><b>(man)</b> Do you know if it's supposed to be warm enough on Wednesday to have our party outside?<br><b>(woman)</b> I heard it'll be warm but that it's likely to rain most of the day.<br><b>(narrator)</b> What will probably happen?", a:"a", exp:"Party inside due to rain.", o:{a:"It will be held inside.", b:"It will be cancelled.", c:"It will be moved to Wednesday.", d:"It will take place in the backyard."} },
    { section: "listening", q: "19. <br><b>(woman)</b> I'm sorry, Paul, but I can't go with you to the basketball game. I really have to study for a math test.<br><b>(man)</b> You know all that stuff. You'll pass with flying colors.<br><b>(narrator)</b> What does the man imply?", a:"d", exp:"Go to game.", o:{a:"Study for the math test.", b:"Take flying lessons.", c:"Stay home and relax.", d:"Go to the basketball game."} },
    { section: "listening", q: "20. <br><b>(man)</b> I like the color and style of this suit, but the pants should be shortened a bit.<br><b>(woman)</b> We can have it done here for you at no extra charge.<br><b>(narrator)</b> What does the woman suggest?", a:"c", exp:"Altered pants.", o:{a:"Charge the clothes.", b:"Buy an extra pair of pants.", c:"Have the pants altered.", d:"Try on another suit."} },
    { section: "listening", q: "21. <br><b>(man)</b> I can't believe you got a job in a candy factory!<br><b>(woman)</b> To be honest, it's not all it's cracked up to be: I'm going to spend the next few months just sorting candies by color and size.<br><b>(narrator)</b> What will the woman be doing?", a:"a", exp:"Separating candies.", o:{a:"Separating different kinds of candies.", b:"Tasting each type of candy before shipping it.", c:"Writing down the size of each candy shipment.", d:"Weighing each candy order."} },
    { section: "listening", q: "22. <br><b>(man)</b> Can I borrow some cough drops? I don't feel up to going to the drugstore.<br><b>(woman)</b> You've been under the weather all week; you ought to go to the health center, just to be sure it's not serious.<br><b>(narrator)</b> What does the woman mean?", a:"d", exp:"See a doctor.", o:{a:"The man should take a week off.", b:"The man is too demanding.", c:"The man should stop worrying so much.", d:"The man should see a doctor."} },
    { section: "listening", q: "23. <br><b>(woman)</b> Those kitchen cabinets look great! Did you put them in yourself?<br><b>(man)</b> I took the easy way out and got a carpenter to do it.<br><b>(narrator)</b> What does the man mean?", a:"b", exp:"Someone else installed.", o:{a:"He doesn't like the way the cabinets were installed.", b:"Someone else installed the cabinets.", c:"The cabinets have not been installed.", d:"It was easy for him to install the cabinets."} },
    { section: "listening", q: "24. <br><b>(woman)</b> By now your sister must have decided where she wants to go to college ...<br><b>(man)</b> She's been too busy with soccer to even open a catalog.<br><b>(narrator)</b> What does the man say?", a:"c", exp:"Hasn't chosen a college yet.", o:{a:"She is looking over a number of college catalogs.", b:"She has applied to a college with a soccer team.", c:"She hasn't chosen a college yet.", d:"She can't decide if she wants to play soccer in college."} },
    { section: "listening", q: "25. <br><b>(man)</b> I've asked Jane if we could get a ride with her to the craft fair.<br><b>(woman)</b> So you can go after all.<br><b>(narrator)</b> What had the woman assumed?", a:"b", exp:"She assumed he couldn't attend.", o:{a:"He didn't know Jane.", b:"He couldn't attend the fair.", c:"He could drive to the craft fair.", d:"He wanted to meet the woman at the fair."} },
    { section: "listening", q: "26. <br><b>(man)</b> Your brother called again while you were out.<br><b>(woman)</b> This is ridiculous. We've been missing each other for days.<br><b>(narrator)</b> What does the woman mean?", a:"c", exp:"Unable to contact each other.", o:{a:"She and her brother miss each other very much.", b:"She can't believe how often her brother calls.", c:"She and her brother have been unable to contact each other.", d:"She thinks it's the wrong day to call her brother."} },
    { section: "listening", q: "27. <br><b>(woman)</b> What I wouldn't give for a hot cup of coffee right now!<br><b>(man)</b> Would you settle for some lukewarm cocoa, left over from lunch? I have enough for two.<br><b>(narrator)</b> What does the man offer?", a:"c", exp:"Share his drink.", o:{a:"Make a pot of coffee for the woman.", b:"Treat the woman to lunch.", c:"Share his drink with the woman.", d:"Make the woman some cocoa."} },
    { section: "listening", q: "28. <br><b>(man)</b> I see this space is marked \"Reserved.\" Can you get a ticket for parking here?<br><b>(woman)</b> Sure can. I did once and had to pay a huge fine.<br><b>(narrator)</b> What does the woman imply?", a:"d", exp:"Look for another place.", o:{a:"The man should reserve a parking space.", b:"The man has to pay the attendant before parking.", c:"The man can park in the space only for a short time.", d:"The man should look for another place to park."} },
    { section: "listening", q: "29. <br><b>(man)</b> I've never applied for a driver's license before. Do you just go into an office and take a short test?<br><b>(woman)</b> If only it were that simple!<br><b>(narrator)</b> What does the woman mean?", a:"d", exp:"Getting license is complicated.", o:{a:"She doesn't know where the office is.", b:"She thinks the man will pass the test.", c:"Getting a driver's license has always been simple.", d:"Getting a driver's license is complicated."} },
    { section: "listening", q: "30. <br><b>(man)</b> Do you want to come with me to hear a lecture over in the Art building?<br><b>(woman)</b> I've got a class right now, but I'm headed that way.<br><b>(narrator)</b> What will the woman probably do?", a:"c", exp:"Accompany toward hall.", o:{a:"Skip her class to attend the lecture.", b:"Leave her class early to attend a lecture.", c:"Accompany the man toward the lecture hall.", d:"Meet her friends in the art building."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part B - Questions 31-34</b><br><br><b>(man)</b> Good morning. Can I help you?<br><b>(woman)</b> Can I get a passport picture taken here?<br><b>(man)</b> Yes, we can take it right now.<br><b>(woman)</b> How long till it's developed?<br><b>(man)</b> Just a few minutes. We have a special instant camera for passport pictures.<br><b>(woman)</b> Great; let's do it.<br><b>(man)</b> Fine. Why don't you have a seat over here in front of the screen. Uh...you might want to pull your hair back. I've heard that passport agencies sometimes reject applications because the picture doesn't show enough of a person's face.<br><b>(woman)</b> That wouldn't be any good. Would it help if I tucked my hair behind my ears?<br><b>(man)</b> Perfect.<br><b>(woman)</b> Oh, what about my glasses; I usually take them off when I'm getting my picture taken.<br><b>(man)</b> If you plan on wearing them when you use your passport, you should probably just leave them on.<br><b>(woman)</b> Oh, I always wear them.<br><b>(man)</b> Then you're OK. Now if you'd sit still a moment and smile... [click] I think we have it.<br><b>(woman)</b> Thanks. I hope it doesn't take too long to get the application processed. I'm scheduled to leave at the end of next month.<br><b>(man)</b> Maybe you could hand deliver your application to a passport agency instead of mailing it. That would probably save you a few days.<br><b>(woman)</b> Good suggestion. I think there's one right near the campus.</div>31. Why does the woman go to see the man?", a:"a", exp:"She needs a passport picture.", o:{a:"She needs a passport picture.", b:"She wants him to retake her passport picture.", c:"She needs help with her passport application.", d:"She wants to get some film developed."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part B</b><br><b>32.</b> According to the man, why might a passport agency reject an application?</div>", a:"b", exp:"Face can't be clearly seen.", o:{a:"The picture is more than one month old.", b:"The person's face can't be clearly seen in the picture.", c:"The picture wasn't taken by an official photographer.", d:"The person hadn't gotten a haircut."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part B</b><br><b>33.</b> Why should the woman keep her glasses on for the picture?</div>", a:"a", exp:"To look the same as usual.", o:{a:"To look the same as she usually does.", b:"To match her student ID card.", c:"To match her old passport picture.", d:"To make her look more serious."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part B</b><br><b>34.</b> What does the woman imply about her new passport?</div>", a:"d", exp:"She needs it quickly.", o:{a:"It'll replace the one she lost.", b:"She'll need extra pages for visas.", c:"She thinks it's expensive.", d:"She needs it quickly."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Questions 35-38:</b> Two students discussing a science museum trip.<br><b>(woman)</b> When Dr. Carver said we had to visit the science museum, I wasn't looking forward to it.<br><b>(man)</b> I know. I remember science museums as boring places filled with stuffed birds and glass display cases of rocks.<br><b>(woman)</b> Yeah. I definitely like these hands-on exhibits better.<br><b>(man)</b> It's a great way to understand concepts we're learning in class. They stick in your mind when you can see them in action.<br><b>(woman)</b> Like that section where you figure out who committed the murder by analyzing evidence.<br><b>(man)</b> Right. Did you try the experiment where you compare the perfumes of all the suspects?<br><b>(woman)</b> The one where you smelled a bottle then answered questions on a computer?<br><b>(man)</b> Yeah. It was interesting to see the chart of different smells and how you classified them, and graphs of the different perfumes according to chemical composition.<br><b>(woman)</b> Amazing. I never understood how that chemical separation technique worked when Dr. Carver talked about it.<br><b>(man)</b> But from the analysis, I can see how useful it is to separate out chemicals.<br><b>(woman)</b> There was so much more I wanted to see.<br><b>(man)</b> Yeah, I'm looking forward to going back.</div>35. What are the speakers mainly discussing?", a:"c", exp:"Value of hands-on exhibits.", o:{a:"Why science museums are boring.", b:"Laboratory analysis of chemicals.", c:"The value of hands-on science exhibits.", d:"Ways to evaluate various smells."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part B</b><br><b>36.</b> Why were the speakers unhappy about the required museum visit at first?</div>", a:"b", exp:"Thought it would be dull.", o:{a:"There was too much to see.", b:"They thought it would be dull.", c:"They didn't have time to go.", d:"They had to write a report about it."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part B</b><br><b>37.</b> What do the speakers say about hands-on exhibits?</div>", a:"a", exp:"Help people learn concepts.", o:{a:"They can help people learn science concepts.", b:"They can be hard to figure out.", c:"They are less interesting than traditional museum displays.", d:"They can be used to train chemists."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part B</b><br><b>38.</b> What do the speakers plan to do in the future?</div>", a:"d", exp:"Return to the museum.", o:{a:"Visit a police lab.", b:"Analyze other perfumes.", c:"Talk to Dr. Carver about their observations.", d:"Return to the museum."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C - Questions 39-42:</b> Tour guide at Prairie Animal Park.<br><b>(man)</b> Thank you for choosing Prairie Animal Park. It's a nonprofit organization and gets no government money. Ticket proceeds go to caring for the park. Most people who work here are volunteers. The park covers 2,400 acres. It was created by a group interested in restoring Illinois prairie to its original condition. All animals here were once native to the area. It surprises many folks to learn that buffalo, bald eagles, bears, and even mountain lions once called Illinois home.<br><br>The animals here are kept in areas closely resembling their natural setting. In front of us, the large open field with the stream. That's where the buffalo roam. The herd is probably grazing at the far end right now. Beyond the stream there's a large wooded area with fenced-in trails. As you walk, you may see families of foxes, deer, and even bears. But remember, this isn't a zoo with caged animals. These animals are doing what they do in the wild...searching for food, hiding, playing. So you may have to look long and hard.</div>39. What is the main purpose of the talk?", a:"c", exp:"Introduce people to a park.", o:{a:"To encourage donations for a new park.", b:"To discourage visitors from touching the animals.", c:"To introduce people to a park.", d:"To train new volunteers."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>40.</b> What do all the animals have in common?</div>", a:"b", exp:"Native to the area.", o:{a:"They live in large herds.", b:"They were once native to the area.", c:"They've been domesticated.", d:"They were once thought to be extinct."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>41.</b> Where are the animals kept?</div>", a:"c", exp:"Natural habitat setting.", o:{a:"In large cages.", b:"In a small, fenced enclosure.", c:"In a setting similar to their natural habitat.", d:"In climate-controlled buildings."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>42.</b> What does the speaker imply about seeing the animals?</div>", a:"a", exp:"Not all may be visible.", o:{a:"Not all the animals may be visible.", b:"Certain animals can only be seen in the winter.", c:"Visitors should not get too close to the animals' cages.", d:"Only a few people at a time can view the animals."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C - Questions 43-46:</b> Music class lecture.<br><b>(man)</b> That about does it for today. We're going to spend the next few classes on a different kind of music. We'll examine the development of jazz from its beginnings up to the latest.<br><br>We'll look at jazz as the most successful music indigenous to the US...born in New Orleans and raised in Chicago and New York. We'll begin with the African roots of the music and how African rhythms blended with Western music.<br><br>Then we'll follow jazz into its heyday - the 1920's, the Jazz Age. It was in this era that the blues were born. The 1930's saw the evolution of swing, jazz played by big bands like Tommy Dorsey's. If there's any generalization about jazz, it's that the music is always changing...evolving...from Bebop of the '40's to cool jazz  of the '50's to the experimental '60's. The '70's saw jazz brought into the electronic age by artists like Herbie Hancock.<br><br>We'll end with the newest transformation of jazz...Afro-pop and Latin beats.<br><br>Be sure to read chapters 13 and 14. If there are any jazz devotees, feel free to bring in your favorite tapes or CDs to share with the class.</div>43. What is the speaker's main purpose?", a:"c", exp:"Let students know what's coming.", o:{a:"To explain what he's going to talk about today.", b:"To summarize the lecture he just gave.", c:"To let students know what they'll be studying soon.", d:"To suggest extra readings."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>44.</b> What will probably be the subject of the next lecture?</div>", a:"a", exp:"Origins of jazz.", o:{a:"The origins of jazz.", b:"The instruments used in jazz.", c:"The newest transformation of jazz.", d:"The development of jazz recording companies."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>45.</b> What are some students asked to bring to class?</div>", a:"b", exp:"Jazz recordings.", o:{a:"Their textbooks.", b:"Jazz recordings.", c:"Friends who are musicians.", d:"Musical instruments."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>46.</b> What does the speaker emphasize about jazz music?</div>", a:"c", exp:"Undergone many changes.", o:{a:"It is no longer a popular form of music.", b:"It has only a small group of devoted fans.", c:"It has undergone many changes over the years.", d:"It is a Latin American music form."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C - Questions 47-50:</b> Talk in a university library.<br><b>(woman)</b> Thanks to the generosity of the Alumni Fund, we've upgraded our facility. Notice the old card catalogs are gone. We spent much of the summer making the switch to an on-line catalog. You can search by author, title, subject, or keyword. For example, if you wanted books about sharks, type <i>S</i> (subject) and <i>sharks</i>. The computer gives you all information that was in the old card catalog, plus it can tell you the status of the book...checked in or out...when it's due back.<br><br>We've also purchased data base files on CD-ROM. Here we have the <i>Reader's Guide to Periodical Literature</i>. You can find references for articles in magazines. Say you were researching pesticides in farming; you'd request articles matching <i>pesticides</i> and <i>agriculture</i>. The data base narrows down references.<br><br>We know everyone is going to find these new computers a real improvement. I can't think of a more significant contribution the Alumni Fund could have made.</div>47. Who is giving the talk?", a:"b", exp:"Reference librarian.", o:{a:"An English professor.", b:"A reference librarian.", c:"A member of the alumni association.", d:"A computer salesperson."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>48.</b> What part did the alumni play?</div>", a:"a", exp:"Raised money.", o:{a:"They raised the money to pay for the equipment.", b:"They convinced the faculty the new equipment was needed.", c:"They helped choose the databases.", d:"They spent the summer setting up the computers."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>49.</b> What new info is available that was NOT in the card catalog?</div>", a:"c", exp:"Whether book is checked out.", o:{a:"The date of the book's publication.", b:"The full title of the book.", c:"Whether the book is checked out.", d:"The subject of the book."} },
    { section: "listening", q: "<div class='mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm h-48 overflow-y-auto'><b>Part C</b><br><b>50.</b> What does the speaker think of the new equipment?</div>", a:"d", exp:"Useful for everyone.", o:{a:"The system should be expanded soon.", b:"People are going to find it difficult to use.", c:"The library has plenty of computer workstations.", d:"It will be useful for everyone."} },

    // --- SECTION 5: STRUCTURE 2 ---
    { section: "structure2", qNum: 1, q: "No spectacle in the universe is _____ than an exploding star.", a:"c", exp: "Comparative degree 'more impressive'.", o:{a:"Impressive", b:"As impressive", c:"More impressive", d:"The most impressive"} },
    { section: "structure2", qNum: 2, q: "The Allegheny and Monongahela rivers _____ in Pittsburgh, Pennsylvania, to form the Ohio River.", a:"a", exp: "Subjek jamak 'rivers' → 'meet'.", o:{a:"Meet", b:"Meeting", c:"For meeting", d:"Which meet"} },
    { section: "structure2", qNum: 3, q: "The horns of a rhinoceros continue _____ throughout its entire lifetime.", a:"b", exp: "continue + to-infinitive.", o:{a:"It grows", b:"To grow", c:"They grow", d:"Grow"} },
    { section: "structure2", qNum: 4, q: "Mathematics helps meteorologists to predict the weather more accurately, to calculate the speed of storms, and _____", a:"c", exp: "Parallel: to predict, to calculate, to determine.", o:{a:"For the wind to blow determines", b:"Causes the wind blowing to determine", c:"To determine what causes the wind to blow", d:"Determine the wind's blowing"} },
    { section: "structure2", qNum: 5, q: "_____ position of the planet Earth in relation to the Sun is always changing a little bit.", a:"a", exp: "Definite article 'The' for subject noun phrase.", o:{a:"The", b:"That the", c:"It was the", d:"There was the"} },
    { section: "structure2", qNum: 6, q: "Systems of phonetic writing are ______ at transcribing accurately any sequence of speech sounds.", a:"b", exp: "Passive: are + aimed.", o:{a:"The aim", b:"Aimed", c:"Who aims", d:"By aiming"} },
    { section: "structure2", qNum: 7, q: "In photosynthesis, _____ through which green plants manufacture food, energy from direct sunlight is trapped by a substance called chlorophyll.", a:"c", exp: "Appositive 'the process'.", o:{a:"That the process", b:"Is a process", c:"The process", d:"In which the process"} },
    { section: "structure2", qNum: 8, q: "______ and hard, ivory may be carved with great delicacy into intricate patterns.", a:"b", exp: "Adverbial clause: 'Because it is dense'.", o:{a:"Because of its density", b:"Because it is dense", c:"May be dense", d:"Its density"} },
    { section: "structure2", qNum: 9, q: "A solar eclipse occurs when the Moon is between the Sun and the Earth, _____ shadow of the Moon moves across the face of the Earth.", a:"a", exp: "Conjunction 'and' + 'the'.", o:{a:"And the", b:"And it is the", c:"That the", d:"That it is the"} },
    { section: "structure2", qNum: 10, q: "The spectacularly beautiful and sultry voice of Lena Horne made her ______.", a:"d", exp: "make + object + complement.", o:{a:"Being a nationally", b:"A vocalist was nationally celebrate", c:"As nationally celebrated vocalist", d:"A nationally celebrated vocalist"} },
    { section: "structure2", qNum: 11, q: "The existence of very long channels ______ into the deep-sea floor of the Atlantic and Pacific oceans has been well documented.", a:"d", exp: "Present participle 'cutting'.", o:{a:"Are cut", b:"Cuts", c:"To cut", d:"Cutting"} },
    { section: "structure2", qNum: 12, q: "Lilian Wald's ____ lies in the field of public health nursing.", a:"d", exp: "Possessive + noun phrase.", o:{a:"Contribution was most distinctive", b:"Whose most distinctive", c:"Most contributions are distinctive", d:"Most distinctive contribution"} },
    { section: "structure2", qNum: 13, q: "Fine rubies _____ of flaws are extremely rare command high prices.", a:"a", exp: "Adjective phrase 'free of flaws'.", o:{a:"Free", b:"Are free", c:"Which free", d:"When are they free"} },
    { section: "structure2", qNum: 14, q: "In some parts of the world, not only _____ a form of entertainment, but it is also a means of communication.", a:"b", exp: "Inversion after 'not only'.", o:{a:"Whistling", b:"Is whistling", c:"That whistling is", d:"Why is whistling"} },
    { section: "structure2", qNum: 15, q: "Invented in the 1780's, threshing machines enabled farmers to process grain _____ they could by hand.", a:"c", exp: "'Much faster than'.", o:{a:"Than much faster", b:"Much than faster", c:"Much faster than", d:"Faster than much"} },
    { section: "structure2", qNum: 16, q: "Patients <span class='underline'>they</span> (A) suffer <span class='underline'>from</span> (B) common arthritis <span class='underline'>can</span> (C) be treated using <span class='underline'>heat</span> (D), physical therapy, and rest.", a:"a", exp: "'they' should be 'who' (relative).", o:{a:"they", b:"from", c:"can", d:"heat"} },
    { section: "structure2", qNum: 17, q: "Forests contain more than merely <span class='underline'>tree</span> (A); they <span class='underline'>also</span> (B) include smaller plants, <span class='underline'>such as</span> (C) mosses, shrubs, and wild <span class='underline'>flowers</span> (D).", a:"a", exp: "'tree' → 'trees'.", o:{a:"tree", b:"also", c:"such as", d:"flowers"} },
    { section: "structure2", qNum: 18, q: "The <span class='underline'>game of</span> (A) marbles, <span class='underline'>which</span> (B) originated in prehistoric times, <span class='underline'>is</span> (C) still played today in <span class='underline'>much</span> (D) land.", a:"d", exp: "'much' → 'many' (countable 'lands').", o:{a:"game of", b:"which", c:"is", d:"much"} },
    { section: "structure2", qNum: 19, q: "The <span class='underline'>modern</span> (A) racing bicycle is <span class='underline'>carefully</span> (B) engineered <span class='underline'>for</span> (C) safety, lightness, and <span class='underline'>reliable</span> (D).", a:"d", exp: "Parallel: 'reliability' (noun).", o:{a:"modern", b:"carefully", c:"for", d:"reliable"} },
    { section: "structure2", qNum: 20, q: "<span class='underline'>On</span> (A) 1954 the United States Supreme Court <span class='underline'>ruled on</span> (B) the case of Brown v. Board of Education, <span class='underline'>declaring</span> (C) segregated education <span class='underline'>unconstitutional</span> (D).", a:"a", exp: "'On' → 'In' (year).", o:{a:"On", b:"ruled on", c:"declaring", d:"unconstitutional"} },
    { section: "structure2", qNum: 21, q: "Because glass objects <span class='underline'>are fragile</span> (A), <span class='underline'>least</span> (B) <span class='underline'>have survived</span> (C) from <span class='underline'>ancient</span> (D) civilizations.", a:"b", exp: "'least' → 'few'.", o:{a:"are fragile", b:"least", c:"have survived", d:"ancient"} },
    { section: "structure2", qNum: 22, q: "An important effect <span class='underline'>that</span> (A) criticism can have on contemporary poets <span class='underline'>is</span> (B) the assurance that there is a <span class='underline'>growing</span> (C) interest <span class='underline'>their work</span> (D).", a:"d", exp: "Missing preposition: 'interest IN their work'.", o:{a:"that", b:"is", c:"growing", d:"their work"} },
    { section: "structure2", qNum: 23, q: "Music festivals, <span class='underline'>which</span> (A) date back as far as the mid-seventeenth century, <span class='underline'>have increased</span> (B) significantly in <span class='underline'>popular</span> (C) within the past few <span class='underline'>decades</span> (D).", a:"c", exp: "'popular' → 'popularity' (noun).", o:{a:"which", b:"have increased", c:"popular", d:"decades"} },
    { section: "structure2", qNum: 24, q: "Human skin is a <span class='underline'>complex</span> (A), sensitive <span class='underline'>organ</span> (B) that serves <span class='underline'>many</span> (C) functions necessary for the <span class='underline'>maintain</span> (D) of life.", a:"d", exp: "'maintain' → 'maintenance' (noun).", o:{a:"complex", b:"organ", c:"many", d:"maintain"} },
    { section: "structure2", qNum: 25, q: "<span class='underline'>Space</span> (A) photography and <span class='underline'>advance</span> (B) measurement technology, <span class='underline'>including</span> (C) a laser reflector placed on the Moon, <span class='underline'>have possible made</span> (D) extremely precise measurements of the surfaces of the Earth.", a:"d", exp: "'have possible made' → 'have made possible'.", o:{a:"Space", b:"advance", c:"including", d:"have possible made"} },
    { section: "structure2", qNum: 26, q: "The scale of demographic <span class='underline'>change</span> (A) that are now occurring and that are <span class='underline'>projected</span> (B) for the near <span class='underline'>future</span> (C) is unprecedented in <span class='underline'>human</span> (D) history.", a:"a", exp: "'change' → 'changes' (agrees with 'are').", o:{a:"change", b:"projected", c:"future", d:"human"} },
    { section: "structure2", qNum: 27, q: "<span class='underline'>The paintings</span> (A) of artist Abraham Rattner are <span class='underline'>noted for</span> (B) their brilliant <span class='underline'>color</span> (C), rich texture, and <span class='underline'>symbolic</span> (D).", a:"d", exp: "Parallel: 'symbolism' (noun).", o:{a:"The paintings", b:"noted for", c:"color", d:"symbolic"} },
    { section: "structure2", qNum: 28, q: "<span class='underline'>Between</span> (A) the high and low tidemarks of marine coasts <span class='underline'>existing</span> (B) abundant and <span class='underline'>varied</span> (C) plant <span class='underline'>and</span> (D) animal life.", a:"b", exp: "'existing' → 'exist' (main verb, inversion).", o:{a:"Between", b:"existing", c:"varied", d:"and"} },
    { section: "structure2", qNum: 29, q: "The total <span class='underline'>amount of water</span> (A) in the world's <span class='underline'>ecological system</span> (B) has remained the <span class='underline'>same than</span> (C) throughout the <span class='underline'>ages</span> (D).", a:"c", exp: "'same than' → 'same as'.", o:{a:"amount of water", b:"ecological system", c:"same than", d:"ages"} },
    { section: "structure2", qNum: 30, q: "Butterflies and moths <span class='underline'>comprise</span> (A) the Lepidoptera order of insects <span class='underline'>find</span> (B) <span class='underline'>throughout</span> (C) <span class='underline'>most of</span> (D) the world.", a:"b", exp: "'find' → 'found' (past participle).", o:{a:"comprise", b:"find", c:"throughout", d:"most of"} },
    { section: "structure2", qNum: 31, q: "The <span class='underline'>planet</span> (A) Neptune has two <span class='underline'>known</span> (B) satellites: one <span class='underline'>about</span> (C) the size <span class='underline'>with</span> (D) Earth's Moon, the other much smaller.", a:"d", exp: "'with' → 'of'.", o:{a:"planet", b:"known", c:"about", d:"with"} },
    { section: "structure2", qNum: 32, q: "Harry Truman's victory <span class='underline'>over</span> (A) Thomas Dewey was <span class='underline'>one of</span> (B) the biggest <span class='underline'>surprise</span> (C) in the <span class='underline'>political</span> (D) history of the United States.", a:"c", exp: "'surprise' → 'surprises' (plural after 'one of').", o:{a:"over", b:"one of", c:"surprise", d:"political"} },
    { section: "structure2", qNum: 33, q: "The narwhal <span class='underline'>resembles like</span> (A) other whales, but has <span class='underline'>a long</span> (B), spiral tusk <span class='underline'>growing form</span> (C) <span class='underline'>its</span> (D) head.", a:"a", exp: "'resembles like' → 'resembles'.", o:{a:"resembles like", b:"a long", c:"growing form", d:"its"} },
    { section: "structure2", qNum: 34, q: "In exchange <span class='underline'>for</span> (A) <span class='underline'>requiring them</span> (B) <span class='underline'>to disclose</span> (C) the workings of their inventions, patents give <span class='underline'>inventors</span> (D) temporary, legally monopolies.", a:"d", exp: "'legally' → 'legal' (adj).", o:{a:"for", b:"to disclose", c:"inventors", d:"legally"} },
    { section: "structure2", qNum: 35, q: "Lillian Gish is <span class='underline'>best</span> (A) for her roles in such <span class='underline'>silently</span> (B) films <span class='underline'>as</span> (C) The Birth of a Nation and Broken Blossoms.", a:"b", exp: "'silently' → 'silent' (adj).", o:{a:"best", b:"silently", c:"as", d:"Nation"} },
    { section: "structure2", qNum: 36, q: "Oraibi, Arizona, <span class='underline'>built by</span> (A) the Hopi Indians during 1100's, is <span class='underline'>probably the</span> (B) oldest <span class='underline'>continuous</span> (C) inhabited <span class='underline'>settlement</span> (D) in the United States.", a:"c", exp: "'continuous' → 'continuously' (adv).", o:{a:"built by", b:"probably the", c:"continuous", d:"settlement"} },
    { section: "structure2", qNum: 37, q: "<span class='underline'>It</span> (A) <span class='underline'>may take</span> (B) several <span class='underline'>hundred years</span> (C) to <span class='underline'>build inch</span> (D) of topsoil.", a:"d", exp: "'build inch' → 'build an inch'.", o:{a:"It", b:"may take", c:"hundred years", d:"build inch"} },
    { section: "structure2", qNum: 38, q: "<span class='underline'>Know for</span> (A) power, <span class='underline'>speed</span> (B) and maneuverability, the goshawk has short wings and <span class='underline'>a</span> (C) long tail, <span class='underline'>enabling them</span> (D) to dodge.", a:"a", exp: "'Know for' → 'Known for'.", o:{a:"Know for", b:"speed", c:"a", d:"enabling them"} },
    { section: "structure2", qNum: 39, q: "Lubrication is essential in machinery because <span class='underline'>if the</span> (A) <span class='underline'>moving part</span> (B) of a machine come into <span class='underline'>direct contact</span> (C) with <span class='underline'>each other</span> (D), friction interferes with motion.", a:"b", exp: "'moving part' → 'moving parts' (plural).", o:{a:"if the", b:"moving part", c:"direct contact", d:"each other"} },
    { section: "structure2", qNum: 40, q: "One basic principle of <span class='underline'>international</span> (A) air law <span class='underline'>recognize</span> (B) a country's complete sovereignty <span class='underline'>over</span> (C) the airspace above its <span class='underline'>territory</span> (D).", a:"b", exp: "'recognize' → 'recognizes' (singular).", o:{a:"international", b:"recognize", c:"over", d:"territory"} }
];

// =============================================
// STATE
// =============================================
let currentFilter = 'all';
let currentIdx = 0;
const answeredMap = new Map();

// =============================================
// HELPERS
// =============================================
function getFilteredData() {
    return quizData
        .map((item, idx) => ({ ...item, originalIdx: idx }))
        .filter(item => currentFilter === 'all' || item.section === currentFilter);
}

const sectionMeta = {
    structure:  { label: 'Structure 1',  color: 'bg-indigo-100 text-indigo-700' },
    structure2: { label: 'Structure 2',  color: 'bg-purple-100 text-purple-700' },
    listening:  { label: 'Listening',    color: 'bg-amber-100 text-amber-700' },
    reading:    { label: 'Reading 1',    color: 'bg-emerald-100 text-emerald-700' },
    reading2:   { label: 'Reading 2',    color: 'bg-cyan-100 text-cyan-700' }
};

// =============================================
// RENDER QUIZ
// =============================================
function renderQuiz() {
    const container = document.getElementById('quiz-area');
    container.innerHTML = '';

    const filtered = getFilteredData();
    const item = filtered[currentIdx];
    if (!item) {
        container.innerHTML = '<p class="empty-state">Tidak ada soal untuk filter ini.</p>';
        return;
    }

    const meta = sectionMeta[item.section] || { label: item.section, color: 'bg-slate-100 text-slate-700' };
    const passageHtml = item.passageImg
        ? `<div class="passage-wrapper"><img src="${item.passageImg}" alt="Passage" class="passage-img"/></div>`
        : '';

    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-item';
    qDiv.innerHTML = `
        <div class="quiz-header">
            <div class="quiz-meta">
                <span class="quiz-badge ${item.section}">${meta.label}</span>
                <span class="quiz-number">#${currentIdx + 1} of ${filtered.length}</span>
            </div>
        </div>

        ${passageHtml}

        <p class="quiz-question">${item.q}</p>

        <div class="options-grid" id="options-area">
            ${['a','b','c','d'].map(letter => `
                <button data-choice="${letter}" class="option-btn">
                    <span class="opt-letter">${letter}</span>
                    <span class="opt-text">${item.o[letter]}</span>
                </button>
            `).join('')}
        </div>

        <div id="feedback-area" class="feedback-box hidden">
            <p id="result-text" class="feedback-result"></p>
            <p id="exp-text" class="feedback-exp"></p>
        </div>

        <div class="quiz-nav">
            <button id="btn-prev" class="btn-nav btn-prev ${currentIdx === 0 ? 'disabled' : ''}">
                &larr; Sebelumnya
            </button>
            <button id="btn-next" class="btn-nav btn-next ${currentIdx === filtered.length - 1 ? 'disabled' : ''}">
                Selanjutnya &rarr;
            </button>
        </div>
    `;
    container.appendChild(qDiv);

    qDiv.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => handleChoice(item.originalIdx, btn.dataset.choice));
    });
    
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    if(currentIdx > 0) btnPrev.addEventListener('click', prevQuestion);
    if(currentIdx < filtered.length - 1) btnNext.addEventListener('click', nextQuestion);

    renderNavigation();
}

// =============================================
// RENDER NAVIGATION
// =============================================
function renderNavigation() {
    const navGrid = document.getElementById('nav-grid');
    if (!navGrid) return;
    navGrid.innerHTML = '';

    const filtered = getFilteredData();

    filtered.forEach((item, idx) => {
        const box = document.createElement('div');
        const isAnswered = answeredMap.has(item.originalIdx);
        const isCorrect = isAnswered ? answeredMap.get(item.originalIdx) : null;
        const isActive = idx === currentIdx;

        let classes = 'nav-box';
        if (isAnswered) classes += isCorrect ? ' answered' : ' wrong';
        if (isActive) classes += ' active';

        box.className = classes;
        box.innerText = idx + 1;           // ✅ Angka 1, 2, 3, ...
        box.title = `Soal ${idx + 1}`;
        box.addEventListener('click', () => jumpToQuestion(idx));
        navGrid.appendChild(box);
    });

    // ✅ Update counter progress
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        let answeredCount = 0;
        filtered.forEach(item => {
            if (answeredMap.has(item.originalIdx)) answeredCount++;
        });
        progressText.innerText = `${answeredCount} / ${filtered.length}`;
    }

    // ✅ Auto-scroll ke soal aktif (biar terlihat)
    const activeBox = navGrid.querySelector('.nav-box.active');
    if (activeBox) {
        activeBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
}

// =============================================
// NAVIGATION
// =============================================
function jumpToQuestion(idx) {
    currentIdx = idx;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextQuestion() {
    const filtered = getFilteredData();
    if (currentIdx < filtered.length - 1) {
        currentIdx++;
        renderQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        currentIdx--;
        renderQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// =============================================
// ANSWER HANDLING
// =============================================
function handleChoice(originalIdx, choice) {
    const item = quizData[originalIdx];
    const optContainer = document.getElementById('options-area');
    const buttons = optContainer.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedback-area');
    const resultText = document.getElementById('result-text');
    const expText = document.getElementById('exp-text');

    buttons.forEach(b => b.classList.add('disabled'));

    const isCorrect = choice === item.a;
    const choiceIdx = ['a','b','c','d'].indexOf(choice);
    const answerIdx = ['a','b','c','d'].indexOf(item.a);

    if (isCorrect) {
        buttons[choiceIdx].classList.add('correct');
        feedback.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-800');
        resultText.innerText = 'Benar! ✨';
    } else {
        buttons[choiceIdx].classList.add('wrong');
        buttons[answerIdx].classList.add('correct');
        feedback.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-800');
        resultText.innerText = `Salah ❌ (Jawaban: ${item.a.toUpperCase()})`;
    }

    expText.innerText = item.exp || 'Jawaban ini berdasarkan teks bacaan atau aturan tata bahasa.';
    feedback.classList.remove('hidden');

    if (!answeredMap.has(originalIdx)) {
        answeredMap.set(originalIdx, isCorrect);
        renderNavigation();
    }
    updateStats();
}

// =============================================
// STATS
// =============================================
function updateStats() {
    const filtered = getFilteredData();
    const total = filtered.length;

    let currentScore = 0;
    let currentAnswered = 0;

    filtered.forEach(item => {
        if (answeredMap.has(item.originalIdx)) {
            currentAnswered++;
            if (answeredMap.get(item.originalIdx)) currentScore++;
        }
    });

    document.getElementById('score').innerText = currentScore;
    document.getElementById('answered').innerText = currentAnswered;
    document.getElementById('max-score').innerText = total;
    document.getElementById('max-answered').innerText = total;

    const overallTotal = quizData.length;
    const overallAnswered = answeredMap.size;
    const pct = (overallAnswered / overallTotal) * 100;
    document.getElementById('top-progress').style.width = pct + '%';
}

// =============================================
// FILTER
// =============================================
function setFilter(filter) {
    currentFilter = filter;
    currentIdx = 0;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderQuiz();
    updateStats();
}

// =============================================
// INIT
// =============================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

renderQuiz();
updateStats();