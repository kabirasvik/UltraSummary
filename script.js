/* ============================================================
   Ultra Summary - Application
   ============================================================ */

/* ----- Book Data ----- */
const BOOKS = [
  {
    id: 'kathopanishad',
    title: 'Kathopanishad',
    author: 'Ancient Seers',
    category: 'Upanishads',
    color: '#3a2b1a',
    accent: '#c9a227',
    readingTime: 6,
    year: -500,
    rating: 4.9,
    summary: 'The legendary dialogue between the boy Nachiketa and Yama, the god of death, on the nature of the Self, knowledge and liberation.',
    keyIdeas: [
        'The <b>Kathopanishad</b> is the legendary dialogue between the boy <b>Nachiketa</b> and <b>Yama</b>, the god of death, on the nature of the Self (Atman), knowledge and liberation (Moksha).',
        'It is embedded in the <b>Krishna Yajurveda</b>, a Mukhya Upanishad listed as <b>#3 in the Muktika canon</b>, with two chapters (adhyayas) of three Vallis each, containing 119 mantras.',
        'Nachiketa\'s <b>three boons</b> lead to the supreme question: what happens to a person after death? Yama\'s reluctant answer reveals the <b>eternal, unborn Atman</b>.',
        'The famous <b>chariot analogy</b>: the body is the chariot, the intellect the charioteer, the mind the reins, and the senses the horses.',
        'The <b>good (shreya)</b> and the <b>pleasant (preya)</b> are opposed; the wise choose the good, while the fool chooses the pleasant.',
        'The Self is <b>not attained by argument</b> but by the grace of the Self itself, which reveals Its own form to the one it chooses.',
    ],
    mainTakeaways: [
        'The Self (Atman) is <b>unborn, eternal, and not killed when the body is killed</b>.',
        '<b>Choose the good over the pleasant</b>, for the pleasant leads to bondage and death.',
        'The body is a chariot; the wise make <b>discrimination their charioteer and the mind their reins</b>.',
        'Brahman is <b>not attained by argument or study alone</b>, but by the one whom It chooses.',
        'When <b>all the desires of the heart fall away</b>, the mortal becomes immortal and attains Brahman.',
    ],
    importantConcepts: [
        '<b>Nachiketa:</b> The young seeker who chose wisdom over wealth and immortality over pleasure.',
        '<b>Yama:</b> The god of death, who reluctantly becomes the teacher of the highest truth.',
        '<b>Shreya and Preya:</b> The good and the pleasant, the two paths that bind a man.',
        '<b>The Chariot Analogy:</b> The body as chariot, intellect as charioteer, mind as reins, senses as horses.',
        '<b>Om:</b> The syllable that is Brahman, the best and highest support.',
        '<b>The Asvattha Tree:</b> The eternal tree with its root above, symbolising Brahman as the source of all.',
    ],
    practicalLessons: [
        'Face the <b>fear of death</b> by inquiring into the nature of the Self, as Nachiketa did.',
        'Cultivate <b>discrimination (viveka)</b> between the good and the pleasant in every choice.',
        'Keep the senses <b>controlled, like good horses</b> under a skilled charioteer.',
        'Meditate on <b>Om</b>, the syllable that is Brahman and the highest support.',
        'Attain the state where <b>all desires of the heart fall away</b>, making the mortal immortal.',
    ],
    bestQuotes: [
      { text: 'Arise! Awake! Approach the great and learn. Like the sharp edge of a razor is that path, so the wise say, hard to tread and difficult to cross.', cite: 'Kathopanishad 1.3.14' },
      { text: 'The knowing Self is not born; It does not die. Birthless, eternal, everlasting and ancient, It is not killed when the body is killed.', cite: 'Kathopanishad 1.2.18' },
      { text: 'The sun does not shine there, nor the moon and the stars, nor these lightnings. He shining, everything shines after Him. By His light all this is lighted.', cite: 'Kathopanishad 2.2.15' },
      { text: 'When all the desires that dwell in the heart fall away, then the mortal becomes immortal and here attains Brahman.', cite: 'Kathopanishad 2.3.14' },
    ],
    finalTakeaway: 'The Kathopanishad presents the eternal truths of Vedanta in the form of a moving narrative: the boy Nachiketa, granted three boons by the god of death, refuses wealth and pleasure and asks instead the deepest question, what happens to a man after death. Yama\'s answer reveals the Atman, the unborn, eternal Self, attained not by argument but by the grace of the Self itself. Through the chariot analogy, the distinction of the good and the pleasant, and the affirmation of Om as Brahman, the Upanishad guides the seeker to the state where all desires of the heart fall away and the mortal becomes immortal.',
    translation: {
      translator: 'Swami Sivananda',
      publisher: 'Divine Life Society',
      sanskritVerses: [
        'ॐ उशन् ह वै वाजश्रवसः सर्ववेदसं ददौ । तस्य ह नचिकेता नाम पुत्र आस ॥ १॥',
        'तँ ह कुमारँ सन्तं दक्षिणासु नीयमानासु श्रद्धाविवेश सोऽमन्यत ॥ २॥',
        'पीतोदका जग्धतृणा दुग्धदोहा निरिन्द्रियाः । अनन्दा नाम ते लोकास्तान् स गच्छति ता ददत् ॥ ३॥',
        'स होवाच पितरं तत कस्मै मां दास्यसीति । द्वितीयं तृतीयं तँ होवाच मृत्यवे त्वा ददामीति ॥ ४॥',
        'बहूनामेमि प्रथमो बहूनामेमि मध्यमः । किँ स्विद्यमस्य कर्तव्यं यन्मयाऽद्य करिष्यति ॥ ५॥',
        'अनुपश्य यथा पूर्वे प्रतिपश्य तथाऽपरे । सस्यमिव मर्त्यः पच्यते सस्यमिवाजायते पुनः ॥ ६॥',
        'वैश्वानरः प्रविशत्यतिथिर्ब्राह्मणो गृहान् । तस्यैताँ शान्तिं कुर्वन्ति हर वैवस्वतोदकम् ॥ ७॥',
        'आशाप्रतीक्षे संगतँ सूनृतां चेष्टापूर्ते पुत्रपशूँश्च सर्वान् । एतद्वृङ्क्ते पुरुषस्याल्पमेधसो यस्यानश्नन्वसति ब्राह्मणो गृहे ॥ ८॥',
        'तिस्रो रात्रीर्यदवात्सीर्गृहे मेऽनश्नन् ब्रह्मन्नतिथिर्नमस्यः । नमस्तेऽस्तु ब्रह्मन् स्वस्ति मेऽस्तु तस्मात्प्रति त्रीन्वरान्वृणीष्व ॥ ९॥',
        'शान्तसंकल्पः सुमना यथा स्याद् वीतमन्युर्गौतमो माऽभि मृत्यो । त्वत्प्रसृष्टं माऽभिवदेत्प्रतीत एतत् त्रयाणां प्रथमं वरं वृणे ॥ १०॥',
        'यथा पुरस्ताद् भविता प्रतीत औद्दालकिरारुणिर्मत्प्रसृष्टः । सुखँ रात्रीः शयिता वीतमन्युः त्वां ददृशिवान्मृत्युमुखात् प्रमुक्तम् ॥ ११॥',
        'स्वर्गे लोके न भयं किंचनास्ति न तत्र त्वं न जरया बिभेति । उभे तीर्त्वाऽशनायापिपासे शोकातिगो मोदते स्वर्गलोके ॥ १२॥',
        'स त्वमग्निँ स्वर्ग्यमध्येषि मृत्यो प्रब्रूहि त्वँ श्रद्दधानाय मह्यम् । स्वर्गलोका अमृतत्वं भजन्त एतद् द्वितीयेन वृणे वरेण ॥ १३॥',
        'प्र ते ब्रवीमि तदु मे निबोध स्वर्ग्यमग्निं नचिकेतः प्रजानन् । अनन्तलोकाप्तिमथो प्रतिष्ठां विद्धि त्वमेतं निहितं गुहायाम् ॥ १४॥',
        'लोकादिमग्निं तमुवाच तस्मै या इष्टका यावतीर्वा यथा वा । स चापि तत्प्रत्यवदद्यथोक्तं अथास्य मृत्युः पुनरेवाह तुष्टः ॥ १५॥',
        'तमब्रवीत् प्रीयमाणो महात्मा वरं तवेहाद्य ददामि भूयः । तवैव नाम्ना भविताऽयमग्निः सृङ्कां चेमामनेकरूपां गृहाण ॥ १६॥',
        'त्रिणाचिकेतस्त्रिभिरेत्य सन्धिं त्रिकर्मकृत्तरति जन्ममृत्यू । ब्रह्मजज्ञं देवमीड्यं विदित्वा निचाय्येमाँ शान्तिमत्यन्तमेति ॥ १७॥',
        'त्रिणाचिकेतस्त्रयमेतद्विदित्वा य एवं विद्वाँश्चिनुते नाचिकेतम् । स मृत्युपाशान् पुरतः प्रणोद्य शोकातिगो मोदते स्वर्गलोके ॥ १८॥',
        'एष तेऽग्निर्नचिकेतः स्वर्ग्यो यमवृणीथा द्वितीयेन वरेण । एतमग्निं तवैव प्रवक्ष्यन्ति जनासः तृतीयं वरं नचिकेतो वृणीष्व ॥ १९॥',
        'येयं प्रेते विचिकित्सा मनुष्येऽस्तीत्येके नायमस्तीति चैके । एतद्विद्यामनुशिष्टस्त्वयाऽहं वराणामेष वरस्तृतीयः ॥ २०॥',
        'देवैरत्रापि विचिकित्सितं पुरा न हि सुविज्ञेयमणुरेष धर्मः । अन्यं वरं नचिकेतो वृणीष्व मा मोपरोत्सीरति मा सृजैनम् ॥ २१॥',
        'देवैरत्रापि विचिकित्सितं किल त्वं च मृत्यो यन्न सुज्ञेयमात्थ । वक्ता चास्य त्वादृगन्यो न लभ्यो नान्यो वरस्तुल्य एतस्य कश्चित् ॥ २२॥',
        'शतायुषः पुत्रपौत्रान्वृणीष्वा बहून्पशून् हस्तिहिरण्यमश्वान् । भूमेर्महदायतनं वृणीष्व स्वयं च जीव शरदो यावदिच्छसि ॥ २३॥',
        'एतत्तुल्यं यदि मन्यसे वरं वृणीष्व वित्तं चिरजीविकां च । महाभूमौ नचिकेतस्त्वमेधि कामानां त्वा कामभाजं करोमि ॥ २४॥',
        'ये ये कामा दुर्लभा मर्त्यलोके सर्वान् कामाँश्छन्दतः प्रार्थयस्व । इमा रामाः सरथाः सतूर्या न हीदृशा लम्भनीया मनुष्यैः । आभिर्मत्प्रत्ताभिः परिचारयस्व नचिकेतो मरणं माऽनुप्राक्षीः ॥ २५॥',
        'श्वोभावा मर्त्यस्य यदन्तकैतत् सर्वेंद्रियाणां जरयंति तेजः । अपि सर्वं जीवितमल्पमेव तवैव वाहास्तव नृत्यगीते ॥ २६॥',
        'न वित्तेन तर्पणीयो मनुष्यो लप्स्यामहे वित्तमद्राक्ष्म चेत्त्वा । जीविष्यामो यावदीशिष्यसि त्वं वरस्तु मे वरणीयः स एव ॥ २७॥',
        'अजीर्यताममृतानामुपेत्य जीर्यन्मर्त्यः क्वधःस्थः प्रजानन् । अभिध्यायन् वर्णरतिप्रमोदान् अतिदीर्घे जीविते को रमेत ॥ २८॥',
        'यस्मिन्निदं विचिकित्सन्ति मृत्यो यत्साम्पराये महति ब्रूहि नस्तत् । योऽयं वरो गूढमनुप्रविष्टो नान्यं तस्मान्नचिकेता वृणीते ॥ २९॥',
        'अन्यच्छ्रेयोऽन्यदुतैव प्रेय-स्ते उभे नानार्थे पुरुषँ सिनीतः । तयोः श्रेय आददानस्य साधु भवति हीयतेऽर्थाद्य उ प्रेयो वृणीते ॥ १॥',
        'श्रेयश्च प्रेयश्च मनुष्यमेतः तौ सम्परीत्य विविनक्ति धीरः । श्रेयो हि धीरोऽभि प्रेयसो वृणीते प्रेयो मन्दो योगक्षेमाद्वृणीते ॥ २॥',
        'स त्वं प्रियान्प्रियरूपांश्च कामान् अभिध्यायन्नचिकेतोऽत्यस्राक्षीः । नैतां सृङ्कां वित्तमयीमवाप्तो यस्यां मज्जन्ति बहवो मनुष्याः ॥ ३॥',
        'दूरमेते विपरीते विषूची अविद्या या च विद्येति ज्ञाता । विद्याभीप्सिनं नचिकेतसं मन्ये न त्वा कामा बहवोऽलोलुपन्त ॥ ४॥',
        'अविद्यायामन्तरे वर्तमानाः स्वयं धीराः पण्डितंमन्यमानाः । दन्द्रम्यमाणाः परियन्ति मूढा अन्धेनैव नीयमाना यथान्धाः ॥ ५॥',
        'न साम्परायः प्रतिभाति बालं प्रमाद्यन्तं वित्तमोहेन मूढम् । अयं लोको नास्ति पर इति मानी पुनः पुनर्वशमापद्यते मे ॥ ६॥',
        'श्रवणायापि बहुभिर्यो न लभ्यः शृण्वन्तोऽपि बहवो यं न विद्युः । आश्चर्यो वक्ता कुशलोऽस्य लब्धा आश्चर्यो ज्ञाता कुशलानुशिष्टः ॥ ७॥',
        'न नरेणावरेण प्रोक्त एष सुविज्ञेयो बहुधा चिन्त्यमानः । अनन्यप्रोक्ते गतिरत्र नास्ति अणीयान् ह्यतर्क्यमणुप्रमाणात् ॥ ८॥',
        'नैषा तर्केण मतिरापनेया प्रोक्तान्येनैव सुज्ञानाय प्रेष्ठ । यां त्वमापः सत्यधृतिर्बतासि त्वादृङ्नो भूयान्नचिकेतः प्रष्टा ॥ ९॥',
        'जानाम्यहं शेवधिरित्यनित्यं न ह्यध्रुवैः प्राप्यते हि ध्रुवं तत् । ततो मया नाचिकेतश्चितोऽग्निः अनित्यैर्द्रव्यैः प्राप्तवानस्मि नित्यम् ॥ १०॥',
        'कामस्याप्तिं जगतः प्रतिष्ठां क्रतोरानन्त्यमभयस्य पारम् । स्तोममहदुरुगायं प्रतिष्ठां दृष्ट्वा धृत्या धीरो नचिकेतोऽत्यस्राक्षीः ॥ ११॥',
        'तं दुर्दर्शं गूढमनुप्रविष्टं गुहाहितं गह्वरेष्ठं पुराणम् । अध्यात्मयोगाधिगमेन देवं मत्वा धीरो हर्षशोकौ जहाति ॥ १२॥',
        'एतच्छ्रुत्वा सम्परिगृह्य मर्त्यः प्रवृह्य धर्म्यमणुमेतमाप्य । स मोदते मोदनीयँ हि लब्ध्वा विवृतँ सद्म नचिकेतसं मन्ये ॥ १३॥',
        'अन्यत्र धर्मादन्यत्राधर्मा-दन्यत्रास्मात्कृताकृतात् । अन्यत्र भूताच्च भव्याच्च यत्तत्पश्यसि तद्वद ॥ १४॥',
        'सर्वे वेदा यत्पदमामनन्ति तपाꣳसि सर्वाणि च यद्वदन्ति । यदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदꣳ संग्रहेण ब्रवीम्योमित्येतत् ॥ १५॥',
        'एतद्ध्येवाक्षरं ब्रह्म एतद्ध्येवाक्षरं परम् । एतद्ध्येवाक्षरं ज्ञात्वा यो यदिच्छति तस्य तत् ॥ १६॥',
        'एतदालम्बनँ श्रेष्ठमेतदालम्बनं परम् । एतदालम्बनं ज्ञात्वा ब्रह्मलोके महीयते ॥ १७॥',
        'न जायते म्रियते वा विपश्चिन् नायं कुतश्चिन्न बभूव कश्चित् । अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥ १८॥',
        'हन्ता चेन्मन्यते हन्तुँ हतश्चेन्मन्यते हतम् । उभौ तौ न विजानीतो नायँ हन्ति न हन्यते ॥ १९॥',
        'अणोरणीयान्महतो महीया-नात्माऽस्य जन्तोर्निहितो गुहायाम् । तमक्रतुः पश्यति वीतशोको धातुप्रसादान्महिमानमात्मनः ॥ २०॥',
        'आसीनो दूरं व्रजति शयानो याति सर्वतः । कस्तं मदामदं देवं मदन्यो ज्ञातुमर्हति ॥ २१॥',
        'अशरीरँ शरीरेष्वनवस्थेष्ववस्थितम् । महान्तं विभुमात्मानं मत्वा धीरो न शोचति ॥ २२॥',
        'नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन । यमेवैष वृणुते तेन लभ्यः तस्यैष आत्मा विवृणुते तनूꣳ स्वाम् ॥ २३॥',
        'नाविरतो दुश्चरितान्नाशान्तो नासमाहितः । नाशान्तमानसो वाऽपि प्रज्ञानेनैनमाप्नुयात् ॥ २४॥',
        'यस्य ब्रह्म च क्षत्रं च उभे भवत ओदनः । मृत्युर्यस्योपसेचनं क इत्था वेद यत्र सः ॥ २५॥',
        'ऋतं पिबन्तौ सुकृतस्य लोके गुहां प्रविष्टौ परमे परार्धे । छायातपौ ब्रह्मविदो वदन्ति पञ्चाग्नयो ये च त्रिणाचिकेताः ॥ १॥',
        'यः सेतुरीजानानामक्षरं ब्रह्म यत् परम् । अभयं तितीर्षतां पारं नाचिकेतँ शकेमहि ॥ २॥',
        'आत्मानँ रथिनं विद्धि शरीरँ रथमेव तु । बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥ ३॥',
        'इन्द्रियाणि हयानाहुर्विषयाँ स्तेषु गोचरान् । आत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुर्मनीषिणः ॥ ४॥',
        'यस्त्वविज्ञानवान्भवत्ययुक्तेन मनसा सदा । तस्येन्द्रियाण्यवश्यानि दुष्टाश्वा इव सारथेः ॥ ५॥',
        'यस्तु विज्ञानवान्भवति युक्तेन मनसा सदा । तस्येन्द्रियाणि वश्यानि सदश्वा इव सारथेः ॥ ६॥',
        'यस्त्वविज्ञानवान्भवत्यमनस्कः सदाऽशुचिः । न स तत्पदमाप्नोति संसारं चाधिगच्छति ॥ ७॥',
        'यस्तु विज्ञानवान्भवति समनस्कः सदा शुचिः । स तु तत्पदमाप्नोति यस्माद्भूयो न जायते ॥ ८॥',
        'विज्ञानसारथिर्यस्तु मनः प्रग्रहवान्नरः । सोऽध्वनः पारमाप्नोति तद्विष्णोः परमं पदम् ॥ ९॥',
        'इन्द्रियेभ्यः परा ह्यर्था अर्थेभ्यश्च परं मनः । मनसस्तु परा बुद्धिर्बुद्धेरात्मा महान्परः ॥ १०॥',
        'महतः परमव्यक्तमव्यक्तात्पुरुषः परः । पुरुषान्न परं किंचित्सा काष्ठा सा परा गतिः ॥ ११॥',
        'एष सर्वेषु भूतेषु गूढोऽऽत्मा न प्रकाशते । दृश्यते त्वग्र्यया बुद्ध्या सूक्ष्मया सूक्ष्मदर्शिभिः ॥ १२॥',
        'यच्छेद्वाङ्मनसी प्राज्ञस्तद्यच्छेज्ज्ञान आत्मनि । ज्ञानमात्मनि महति नियच्छेत्तद्यच्छेच्छान्त आत्मनि ॥ १३॥',
        'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत । क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति ॥ १४॥',
        'अशब्दमस्पर्शमरूपमव्ययं तथाऽरसं नित्यमगन्धवच्च यत् । अनाद्यनन्तं महतः परं ध्रुवं निचाय्य तन्मृत्युमुखात् प्रमुच्यते ॥ १५॥',
        'नाचिकेतमुपाख्यानं मृत्युप्रोक्तँ सनातनम् । उक्त्वा श्रुत्वा च मेधावी ब्रह्मलोके महीयते ॥ १६॥',
        'य इमं परमं गुह्यं श्रावयेद् ब्रह्मसंसदि । प्रयतः श्राद्धकाले वा तदानन्त्याय कल्पते ॥ १७॥',
        'पराञ्चि खानि व्यतृणत् स्वयम्भू-स्तस्मात्पराङ्पश्यति नान्तरात्मन् । कश्चिद्धीरः प्रत्यगात्मानमैक्ष-दावृत्तचक्षुरमृतत्वमिच्छन् ॥ १॥',
        'पराचः कामाननुयन्ति बाला-स्ते मृत्योर्यन्ति विततस्य पाशम् । अथ धीरा अमृतत्वं विदित्वा ध्रुवमध्रुवेष्विह न प्रार्थयन्ते ॥ २॥',
        'येन रूपं रसं गन्धं शब्दान् स्पर्शाꣳश्च मैथुनान् । एतेनैव विजानाति किमत्र परिशिष्यते । एतद्वै तत् ॥ ३॥',
        'स्वप्नान्तं जागरितान्तं चोभौ येनानुपश्यति । महान्तं विभुमात्मानं मत्वा धीरो न शोचति ॥ ४॥',
        'य इमं मध्वदं वेद आत्मानं जीवमन्तिकात् । ईशानं भूतभव्यस्य न ततो विजुगुप्सते । एतद्वै तत् ॥ ५॥',
        'यः पूर्वं तपसो जातमद्भ्यः पूर्वमजायत । गुहां प्रविश्य तिष्ठन्तं यो भूतेभिर्व्यपश्यत । एतद्वै तत् ॥ ६॥',
        'या प्राणेन संभवत्यदितिर्देवतामयी । गुहां प्रविश्य तिष्ठन्तीं या भूतेभिर्व्यजायत । एतद्वै तत् ॥ ७॥',
        'अरण्योर्निहितो जातवेदा गर्भ इव सुभृतो गर्भिणीभिः । दिवे दिवे ईड्यो जागृवद्भिर्हविष्मद्भिर्मनुष्येभिरग्निः । एतद्वै तत् ॥ ८॥',
        'यतश्चोदेति सूर्योऽस्तं यत्र च गच्छति । तं देवाः सर्वेऽर्पितास्तदु नात्येति कश्चन । एतद्वै तत् ॥ ९॥',
        'यदेवेह तदमुत्र यदमुत्र तदन्विह । मृत्योः स मृत्युमाप्नोति य इह नानेव पश्यति ॥ १०॥',
        'मनसैवेदमाप्तव्यं नेह नानाऽस्ति किंचन । मृत्योः स मृत्युं गच्छति य इह नानेव पश्यति ॥ ११॥',
        'अङ्गुष्ठमात्रः पुरुषो मध्य आत्मनि तिष्ठति । ईशानं भूतभव्यस्य न ततो विजुगुप्सते । एतद्वै तत् ॥ १२॥',
        'अङ्गुष्ठमात्रः पुरुषो ज्योतिरिवाधूमकः । ईशानो भूतभव्यस्य स एवाद्य स उ श्वः । एतद्वै तत् ॥ १३॥',
        'यथोदकं दुर्गे वृष्टं पर्वतेषु विधावति । एवं धर्मान् पृथक् पश्यंस्तानेवानुविधावति ॥ १४॥',
        'यथोदकं शुद्धे शुद्धमासिक्तं तादृगेव भवति । एवं मुनेर्विजानत आत्मा भवति गौतम ॥ १५॥',
        'पुरमेकादशद्वारमजस्यावक्रचेतसः । अनुष्ठाय न शोचति विमुक्तश्च विमुच्यते । एतद्वै तत् ॥ १॥',
        'हँसः शुचिषद्वसुरान्तरिक्षसद्-होता वेदिषदतिथिर्दुरोणसत् । नृषद्वरसदृतसद्व्योमसद् अब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत् ॥ २॥',
        'ऊर्ध्वं प्राणमुन्नयत्यपानं प्रत्यगस्यति । मध्ये वामनमासीनं विश्वे देवा उपासते ॥ ३॥',
        'अस्य विस्रंसमानस्य शरीरस्थस्य देहिनः । देहाद्विमुच्यमानस्य किमत्र परिशिष्यते । एतद्वै तत् ॥ ४॥',
        'न प्राणेन नापानेन मर्त्यो जीवति कश्चन । इतरेण तु जीवन्ति यस्मिन्नेतावुपाश्रितौ ॥ ५॥',
        'हन्त त इदं प्रवक्ष्यामि गुह्यं ब्रह्म सनातनम् । यथा च मरणं प्राप्य आत्मा भवति गौतम ॥ ६॥',
        'योनिमन्ये प्रपद्यन्ते शरीरत्वाय देहिनः । स्थाणुमन्येऽनुसंयन्ति यथाकर्म यथाश्रुतम् ॥ ७॥',
        'य एष सुप्तेषु जागर्ति कामं कामं पुरुषो निर्मिमाणः । तदेव शुक्रं तद्ब्रह्म तदेवामृतमुच्यते । तस्मिँल्लोकाः श्रिताः सर्वे तदु नात्येति कश्चन । एतद्वै तत् ॥ ८॥',
        'अग्निर्यथैको भुवनं प्रविष्टो रूपं रूपं प्रतिरूपो बभूव । एकस्तथा सर्वभूतान्तरात्मा रूपं रूपं प्रतिरूपो बहिश्च ॥ ९॥',
        'वायुर्यथैको भुवनं प्रविष्टो रूपं रूपं प्रतिरूपो बभूव । एकस्तथा सर्वभूतान्तरात्मा रूपं रूपं प्रतिरूपो बहिश्च ॥ १०॥',
        'सूर्यो यथा सर्वलोकस्य चक्षुः न लिप्यते चाक्षुषैर्बाह्यदोषैः । एकस्तथा सर्वभूतान्तरात्मा न लिप्यते लोकदुःखेन बाह्यः ॥ ११॥',
        'एको वशी सर्वभूतान्तरात्मा एकं रूपं बहुधा यः करोति । तमात्मस्थं येऽनुपश्यन्ति धीराः तेषां सुखं शाश्वतं नेतरेषाम् ॥ १२॥',
        'नित्योऽनित्यानां चेतनश्चेतनानाम् एको बहूनां यो विदधाति कामान् । तमात्मस्थं येऽनुपश्यन्ति धीराः तेषां शान्तिः शाश्वती नेतरेषाम् ॥ १३॥',
        'तदेतदिति मन्यन्तेऽनिर्देश्यं परमं सुखम् । कथं नु तद्विजानीयां किमु भाति विभाति वा ॥ १४॥',
        'न तत्र सूर्यो भाति न चन्द्रतारकं नेमा विद्युतो भान्ति कुतोऽयमग्निः । तमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति ॥ १५॥',
        'ऊर्ध्वमूलोऽवाक्शाख एषोऽश्वत्थः सनातनः । तदेव शुक्रं तद्ब्रह्म तदेवामृतमुच्यते । तस्मिँल्लोकाः श्रिताः सर्वे तदु नात्येति कश्चन । एतद्वै तत् ॥ १॥',
        'यदिदं किं च जगत् सर्वं प्राण एजति निःसृतम् । महद्भयं वज्रमुद्यतं य एतद्विदुरमृतास्ते भवन्ति ॥ २॥',
        'भयादस्याग्निस्तपति भयात्तपति सूर्यः । भयादिन्द्रश्च वायुश्च मृत्युर्धावति पञ्चमः ॥ ३॥',
        'इह चेदशकद्बोद्धुं प्राक्षरीरस्य विस्रसः । ततः सर्गेषु लोकेषु शरीरत्वाय कल्पते ॥ ४॥',
        'यथाऽऽदर्शे तथाऽऽत्मनि यथा स्वप्ने तथा पितृलोके । यथाऽप्सु परीव ददृशे तथा गन्धर्वलोके छायातपयोरिव ब्रह्मलोके ॥ ५॥',
        'इन्द्रियाणां पृथग्भावमुदयास्तमयौ च यत् । पृथगुत्पद्यमानानां मत्वा धीरो न शोचति ॥ ६॥',
        'इन्द्रियेभ्यः परं मनो मनसः सत्त्वमुत्तमम् । सत्त्वादधि महानात्मा महतोऽव्यक्तमुत्तमम् ॥ ७॥',
        'अव्यक्तात्तु परः पुरुषो व्यापकोऽलिङ्ग एव च । यं ज्ञात्वा मुच्यते जन्तुरमृतत्वं च गच्छति ॥ ८॥',
        'न संदृशे तिष्ठति रूपमस्य न चक्षुषा पश्यति कश्चनैनम् । हृदा मनीषा मनसाऽभिक्लृप्तो य एतद्विदुरमृतास्ते भवन्ति ॥ ९॥',
        'यदा पञ्चावतिष्ठन्ते ज्ञानानि मनसा सह । बुद्धिश्च न विचेष्टते तामाहुः परमां गतिम् ॥ १०॥',
        'तां योगमिति मन्यन्ते स्थिरामिन्द्रियधारणाम् । अप्रमत्तस्तदा भवति योगो हि प्रभवाप्ययौ ॥ ११॥',
        'नैव वाचा न मनसा प्राप्तुं शक्यो न चक्षुषा । अस्तीति ब्रुवतोऽन्यत्र कथं तदुपलभ्यते ॥ १२॥',
        'अस्तीत्येवोपलब्धव्यस्तत्त्वभावेन चोभयोः । अस्तीत्येवोपलब्धस्य तत्त्वभावः प्रसीदति ॥ १३॥',
        'यदा सर्वे प्रमुच्यन्ते कामा येऽस्य हृदि श्रिताः । अथ मर्त्योऽमृतो भवत्यत्र ब्रह्म समश्नुते ॥ १४॥',
        'यदा सर्वे प्रभिद्यन्ते हृदयस्येह ग्रन्थयः । अथ मर्त्योऽमृतो भवत्येतावद्ध्यनुशासनम् ॥ १५॥',
        'शतं चैका च हृदयस्य नाड्य-स्तासां मूर्धानमभिनिःसृतैका । तयोर्ध्वमायन्नमृतत्वमेति विष्वङ्ङन्या उत्क्रमणे भवन्ति ॥ १६॥',
        'अङ्गुष्ठमात्रः पुरुषोऽन्तरात्मा सदा जनानां हृदये संनिविष्टः । तं स्वाच्छरीरात्प्रवृहेन्मुञ्जादिवेषीकां धैर्येण । तं विद्याच्छुक्रममृतं तं विद्याच्छुक्रममृतमिति ॥ १७॥',
        'मृत्युप्रोक्तां नचिकेतोऽथ लब्ध्वा विद्यामेतां योगविधिं च कृत्स्नम् । ब्रह्मप्राप्तो विरजोऽभूद्विमृत्यु-रन्योऽप्येवं यो विदध्यात्ममेव ॥ १८॥',
      ],
      verses: [
        'Vajasravasa, desiring rewards, performed the Visvajit sacrifice, in which he gave away all his property. He had a son named Nachiketa.',
        'When the gifts were being distributed, faith entered into the heart of Nachiketa, who was still a boy. He said to himself: Joyless, surely, are the worlds to which he goes who gives away cows no longer able to drink, to eat, to give milk, or to calve.',
        '(These cows) have drunk water for the last time, eaten grass for the last time, have yielded all their milk and are devoid of vigour. Joyless verily are those worlds; them he attains who gives these.',
        'He said to his father: Father! To whom will you give me? He said this a second and a third time. Then his father replied: Unto death I will give you.',
        'Among many I am the first; or among many I am the middlemost. But certainly I am never the last. What purpose of the King of Death will my father serve today by thus giving me away to him?',
        'Nachiketa said: Look back and see how it was with those who came before us and observe how it is with those who are now with us. A mortal ripens like corn and like corn he springs up again.',
        'Verily, like fire a brahmin guest enters a house; the householder pacifies him by giving him water and a seat. Bring him water. O King of Death!',
        'The brahmin who dwells in a house, fasting, destroys that foolish householder\'s hopes and expectations, the reward of his intercourse with pious people, the merit of his kindly speech, the good results of his sacrifices and beneficial deeds and his cattle and children as well.',
        'Yama said: O Brahmin, salutations to you! You are a venerable guest and have dwelt in my house three nights without eating; therefore choose now three boons, one for each night, O Brahmin! May all be well with me!',
        'Nachiketa said: O Death, may Gautama, my father, be calm, cheerful and free from anger toward me! May he recognise me and greet me when I shall have been sent home by you! This I choose as the first of the three boons.',
        'Yama said: Through my favour, your father, Auddilaki Aruni, will recognise you and be again toward you as he was before. After having seen you freed from the jaws of death, he will sleep peacefully at night and bear no anger against you.',
        'Nachiketa said: In heaven there is no fear. You are not there; nor there do they in old age fear. Having crossed both hunger and thirst, one in heaven rejoices being above grief.',
        'Oh Death! thou knowest the fire which leads to heaven; explain to me who am zealous that (the fire) by which those, whose world is heaven, attain immortality. I pray for this by my second boon.',
        'Yama said: I know well the Fire-sacrifice, which leads to Heaven and I will explain it to you. Listen to me. Know this Fire to be the means of attaining Heaven. It is the support of the universe; it is hidden in the hearts of the wise.',
        'Yama then told him about the Fire, which is the source of the worlds and what bricks were to be gathered for the altar and how many and how the sacrificial fire was to be lighted. Nachiketa, too, repeated all this as it had been told him. Then Yama, being pleased with him, spoke again.',
        'High-souled Death, being well pleased, said to Nachiketa: I will now give you another boon: this fire shall be named after you. Take also from me this many-coloured chain.',
        'He who has performed three times this Nachiketa sacrifice, having been instructed by the three and also has performed his three duties, overcomes birth and death. Having known this Fire born of Brahman, omniscient, luminous and adorable and realised it, he attains supreme peace.',
        'He who, having known the three, has performed three times the Nachiketa sacrifice, throws off, even here, the chains of death, overcomes grief and rejoices in Heaven.',
        'This, O Nachiketa, is your Fire-sacrifice, which leads to Heaven and which you have chosen as your second boon. People will call this Fire by your name. Now, O Nachiketa, choose the third boon.',
        'Nachiketa said: There is this doubt about a man when he is dead: Some say that he exists; others, that he does not. This I should like to know, taught by you. This is the third of my boons.',
        'Yama said: On this subject even the gods formerly had their doubts. It is not easy to understand: the nature of Atman is subtle. Choose another boon, O Nachiketa! Do not press me. Release me from that boon.',
        'Nachiketa said: O Death, even the gods have their doubts about this subject; and you have declared it to be not easy to understand. But another teacher like you cannot be found and surely no other boon is comparable to this.',
        'Yama said: Choose sons and grandsons who shall live a hundred years; choose elephants, horses, herds of cattle and gold. Choose a vast domain on earth; live here as many years as you desires.',
        'If you deem any other boon equal to that, choose it; choose wealth and a long life. Be the king, O Nachiketa, of the wide earth. I will make you the enjoyer of all desires.',
        'Whatever desires are difficult to satisfy in this world of mortals, choose them as you wish: these fair maidens, with their chariots and musical instruments, men cannot obtain them. I give them to you and they shall wait upon you. But do not ask me about death.',
        'Nachiketa said: But, O Death, these endure only till tomorrow. Furthermore, they exhaust the vigour of all the sense organs. Even the longest life is short indeed. Keep your horses, dances and songs for yourself.',
        'Wealth can never make a man happy. Moreover, since I have beheld you, I shall certainly obtain wealth; I shall also live as long as you rule. Therefore no boon will be accepted by me but the one that I have asked.',
        'Who among decaying mortals here below, having approached the undecaying immortals and coming to know that his higher needs may be fulfilled by them, would exult in a life over long, after he had pondered on the pleasures arising from beauty and song?',
        'Tell me, O Death, of that Great Hereafter about which a man has his doubts.',
        'Yama said: The good is one thing; the pleasant, another. Both of these, serving different needs, bind a man. It goes well with him who, of the two, takes the good; but he who chooses the pleasant misses the end.',
        'Both the good and the pleasant present themselves to a man. The calm soul examines them well and discriminates. Yea, he prefers the good to the pleasant; but the fool chooses the pleasant out of greed and avarice.',
        'O Nachiketa, after pondering well the pleasures that are or seem to he delightful, you have renounced them all. You have not taken the road abounding in wealth, where many men sink.',
        'Wide apart and leading to different ends are these two: ignorance and what is known as Knowledge. I regard you, O Nachiketa, to be one who desires Knowledge; for even many pleasures could not tempt you away.',
        'Fools dwelling in darkness, but thinking themselves wise and erudite, go round and round, by various tortuous paths, like the blind led by the blind.',
        'The Hereafter never reveals itself to a person devoid of discrimination, heedless and perplexed by the delusion of wealth. "This world alone exists," he thinks, "and there is no other." Again and again he comes under my sway.',
        'Many there are who do not even hear of Atman; though hearing of Him, many do not comprehend. Wonderful is the expounder and rare the hearer; rare indeed is the experiencer of Atman taught by an able preceptor.',
        'Atman, when taught by an inferior person, is not easily comprehended, because It is diversely regarded by disputants. But when It is taught by him who has become one with Atman, there can remain no more doubt about It. Atman is subtler than the subtlest and not to be known through argument.',
        'This Knowledge cannot be attained by reasoning. Atman become easy of comprehension, O dearest, when taught by another. You have attained this Knowledge now. You are, indeed, a man of true resolve. May we always have an inquirer like you!',
        'Yama said: I know that the treasure resulting from action is not eternal; for what is eternal cannot be obtained by the non-eternal. Yet I have performed the Nachiketa sacrifice with the help of non-eternal things and attained this position which is only relatively eternal.',
        'The fulfilment of desires, the foundation of the universe, the rewards of sacrifices, the shore where there is no fear, that which adorable and great, the wide abode and the goal, all this you have seen; and being wise, you have with firm resolve discarded everything.',
        'The wise man who, by means of concentration on the Self, realises that ancient, effulgent One, who is hard to be seen, unmanifest, hidden and who dwells in the buddhi and rests in the body, he, indeed, leaves joy and sorrow far behind.',
        'The mortal who has heard this and comprehended it well, who has separated that Atman, the very soul of dharma, from all physical objects and has realised the subtle essence, rejoices because he has obtained that which is the cause of rejoicing. The Abode of Brahman, I believe, is open for Nachiketa.',
        'Nachiketa said: That which you see as other than righteousness and unrighteousness, other than all this cause and effect, other than what has been and what is to be, tell me That.',
        'Yama said: The goal which all the Vedas declare, which all austerities aim at and which men desire when they lead the life of continence, I will tell you briefly: it is Om.',
        'This syllable Om is indeed Brahman. This syllable is the Highest. Whosoever knows this syllable obtains all that he desires.',
        'This is the best support; this is the highest support. Whosoever knows this support is adored in the world of Brahma.',
        'The knowing Self is not born; It does not die. It has not sprung from anything; nothing has sprung from It. Birthless, eternal, everlasting and ancient, It is not killed when the body is killed.',
        'If the killer thinks he kills and if the killed man thinks he is killed, neither of these apprehends aright. The Self kills not, nor is It killed.',
        'Atman, smaller than the small, greater than the great, is hidden in the hearts of all living creatures. A man who is free from desires beholds the majesty of the Self through tranquillity of the senses and the mind and becomes free from grief.',
        'Though sitting still, It travels far; though lying down, It goes everywhere. Who but myself can know that luminous Atman who rejoices and rejoices not?',
        'The wise man, having realised Atman as dwelling within impermanent bodies but Itself bodiless, vast and all-pervading, does not grieve.',
        'This Atman cannot be attained by the study of the Vedas, or by intelligence, or by much hearing of sacred books. It is attained by him alone whom It chooses. To such a one Atman reveals Its own form.',
        'He who has not first turn away from wickedness, who is not tranquil and subdued and whose mind is not at peace, cannot attain Atman. It is realised only through the Knowledge of Reality.',
        'Who, then, knows where He is, He to whom Brahmins and kshattriyas are mere food and death itself a condiment?',
        'Two there are who dwell within the body, in the intellect, the supreme akasa of the heart, enjoying the sure rewards of their own actions. The knowers of Brahman describe them as light and shade, as do those householders who have offered oblations in the Five Fires and also those who have thrice performed the Nachiketa sacrifice.',
        'We know how to perform the Nachiketa sacrifice, which is the bridge for sacrificers; and we know also that supreme, imperishable Brahman, which is sought by those who wish to cross over to the shore where there is no fear.',
        'Know the atman to be the master of the chariot; the body, chariot; the intellect, the charioteer; and the mind, the reins.',
        'The senses, they say, are the horses; the objects, the roads. The wise call the atman, united with the body, the senses and the mind, the enjoyer.',
        'If the buddhi, being related to a mind that is always distracted, loses its discriminations, then the senses become uncontrolled, like the vicious horses of a charioteer.',
        'But if the buddhi, being related to a mind that is always restrained, possesses discrimination, then the senses come under control, like the good horses of a charioteer.',
        'If the buddhi, being related to a distracted mind, loses its discrimination and therefore always remains impure, then the embodied soul never attains the goal, but enters into the round of births.',
        'But if the buddhi, being related to a mind that is restrained, possesses discrimination and therefore always remains pure, then the embodied soul attains that goal from which he is not born again.',
        'A man who has discrimination for his charioteer and holds the reins of the mind firmly, reaches the end of the road; and that is the supreme position of Vishnu.',
        'Beyond the senses are the rudiments of its objects; beyond these rudiments is the mind; beyond the mind is atman known as Mahat (great).',
        'Beyond the great Atman is the Unmanifested; beyond the Unmanifested is the Purusha (the Cosmic Soul); beyond the Purusha there is nothing. That is the end that is the final goal.',
        'That Self hidden in all beings does not shine forth; but It is seen by subtle seers through their one-pointed and subtle intellects.',
        'The wise man should merge his speech in his mind and his mind in his intellect. He should merge his intellect in the Cosmic Mind and the Cosmic Mind in the Tranquil Self.',
        'Arise! Awake! Approach the great and learn. Like the sharp edge of a razor is that path, so the wise say, hard to tread and difficult to cross.',
        'Having realised Atman, which is soundless, intangible, formless, undecaying and likewise tasteless, eternal and odourless; having realised That which is without beginning and end, beyond the Great and unchanging, one is freed from the jaws of death.',
        'The wise man who has heard and related the eternal story of Nachiketa, told by Death, is adored in the world of Brahman.',
        'And he who, practising self-control, recites the supreme secret in an assembly of Brahmins or at a after-death ceremony obtains thereby infinite rewards. Yea, he obtains infinite rewards.',
        'Yama said: The self-existent Supreme Lord inflicted an injury upon the sense-organs in creating them with outgoing tendencies; therefore a man perceives only outer objects with them and not the inner Self. But a calm person, wishing for Immortality, beholds the inner Self with his eyes closed.',
        'Children pursue outer pleasures and fall into the net of widespread death; but calm souls, having known what is unshakable Immortality, do not covet any uncertain thing in this world.',
        'It is through Atman that one knows form, taste, smell, sounds, touches and carnal pleasures. Is there anything that remains unknown to Atman? This, verily, is That.',
        'It is through Atman that one perceives all objects in sleep or in the waking state. Having realised the vast, all-pervading Atman, the calm soul does not grieve.',
        'He who knows the individual soul, the experiencer of the fruits of action, as Atman, always near and the Lord of the past and the future, will not conceal himself from others. This, verily, is That.',
        'He verily knows Brahman who knows the First-born, the offspring of austerity, created prior to the waters and dwelling, with the elements, in the cave of the heart. This, verily, is That.',
        'He verily knows Brahman who knows Aditi, the soul of all deities, who was born in the form of Prana, who was created with the elements and who, entering into the heart, abides therein. This, verily, is That.',
        'Agni, hidden in the two fire-sticks and well guarded, like a child in the womb, by its mother, is worshipped day after day by men who are awake and by those who offer oblations in the sacrifices. This, verily, is That.',
        'Whence the sun rises and whither it goes to set, in whom all the devas are contained and whom none can ever pass beyond. This, verily, is That.',
        'What is here, the same is there and what is there, the same is here. He goes from death to death who sees any difference here.',
        'By the mind alone is Brahman to be realised; then one does not see in It any multiplicity whatsoever. He goes from death to death who sees multiplicity in It. This, verily, is That.',
        'The Purusha, of the size of a thumb, dwells in the body. He is the Lord of the past and the future. After knowing Him, one does not conceal oneself any more. This, verily, is That.',
        'The Purusha, of the size of a thumb, is like a flame without smoke. The Lord of the past and the future, He is the same today and tomorrow. This, verily, is That.',
        'As rainwater falling on a mountain peak runs down the rocks in all directions, even so he who sees the attributes as different from Brahman verily runs after them in all directions.',
        'As pure water poured into pure water becomes one with it, so also, O Gautama, does the Self of the sage who knows.',
        'There is a city with eleven gates belonging to the unborn Atman of undistorted Consciousness. He who meditates on Him grieves no more; liberated from the bonds of ignorance, he becomes free. This, verily, is That.',
        'He is the sun dwelling in the bright heavens. He is the air in the interspace. He is the fire dwelling on earth. He is the guest dwelling in the house. He dwells in men, in the gods, in truth, in the sky. He is born in the water, on earth, in the sacrifice, on the mountains. He is the True and the Great.',
        'He it is who sends prana upward and who leads apana downward. All the devas worship that adorable One seated in the middle.',
        'When the soul, identified with the body and dwelling in it, is torn away from the body, is freed from it, what then remains? This, verily, is That?',
        'No mortal ever lives by prana, which goes up, nor by apana, which goes down. Men live by something different, on which these two depend.',
        'Well then, Gautama, I shall tell you about this profound and eternal Brahman and also about what happens to the atman after meeting death.',
        'Some jivas enter the womb to be embodied as organic beings and some go into non-organic matter, according to their work and according to their knowledge.',
        'He, the Purusha, who remains awake while the sense-organs are asleep, shaping one lovely form after another, that indeed is the Pure, that is Brahman and that alone is called the Immortal. All worlds are contained in Him and none can pass beyond. This, verily, is That.',
        'As the same non-dual fire, after it has entered the world, becomes different according to whatever it burns, so also the same non-dual Atman, dwelling in all beings, becomes different according to whatever It enters. And It exists also without.',
        'As the same non-dual air, after it has entered the world, becomes different according to whatever it enters, so also the same non-dual Atman, dwelling in all beings, becomes different according to whatever It enters. And It exists also without.',
        'As the sun, which helps all eyes to see, is not affected by the blemishes of the eyes or of the external things revealed by it, so also the one Atman, dwelling in all beings, is never contaminated by the misery of the world, being outside it.',
        'There is one Supreme Ruler, the inmost Self of all beings, who makes His one form manifold. Eternal happiness belongs to the wise, who perceive Him within themselves, not to others.',
        'There is One who is the eternal Reality among non-eternal objects, the one truly conscious Entity among conscious objects and who, though non-dual, fulfils the desires of many. Eternal peace belongs to the wise, who perceive Him within themselves, not to others.',
        'The sages realise that indescribable Supreme Joy as "This is That." How can I realise It? Is It self-luminous? Does It shine brightly, or not?',
        'The sun does not shine there, nor the moon and the stars, nor these lightnings, not to speak of this fire. He shining, everything shines after Him. By His light all this is lighted.',
        'This is that eternal Asvattha Tree with its root above and branches below. That root, indeed, is called the Bright; That is Brahman and That alone is the Immortal. In That all worlds are contained and none can pass beyond. This, verily, is That.',
        'Whatever there is, the whole universe, vibrates because it has gone forth from Brahman, which exists as its Ground. That Brahman is a great terror, like a poised thunderbolt. Those who know It become immortal.',
        'From terror of Brahman, fire burns; from terror of It, the sun shines; from terror of It, Indra and Vayu and Death, the fifth, run.',
        'If a man is able to realise Brahman here, before the falling asunder of his body, then he is liberated; if not, he is embodied again in the created worlds.',
        'As in a mirror, so in the buddhi; as in a dream, so in the World of the Fathers; as in water, so Brahman is seen in the World of the Gandharvas; as in light and shade, so in the World of Brahma.',
        'Having understood that the senses have their separate origin and that they are distinct from Atman and also that their rising and setting belong to them alone, a wise man grieves no more.',
        'Beyond the senses is the mind, beyond the mind is the intellect, higher than the intellect is the Great Atman, higher than the Great Atman is the Unmanifest.',
        'Beyond the Unmanifest is the Person, all-pervading and imperceptible. Having realised Him, the embodied self becomes liberated and attains Immortality.',
        'His form is not an object of vision; no one beholds Him with the eye. One can know Him when He is revealed by the intellect free from doubt and by constant meditation. Those who know this become immortal.',
        'When the five instruments of knowledge stand still, together with the mind and when the intellect does not move, that is called the Supreme State.',
        'This, the firm Control of the senses, is what is called yoga. One must then be vigilant; for yoga can be both beneficial and injurious.',
        'Atman cannot be attained by speech, by the mind, or by the eye. How can It be realised in any other way than by the affirmation of him who says: "He is"?',
        'He is to be realised first as Existence limited by upadhis and then in His true transcendental nature. Of these two aspects, Atman realised as Existence leads the knower to the realisation of His true nature.',
        'When all the desires that dwell in the heart fall away, then the mortal becomes immortal and here attains Brahman.',
        'When all the ties of the heart are severed here on earth, then the mortal becomes immortal. This much alone is the teaching.',
        'There are one hundred and one arteries of the heart, one of which pierces the crown of the head. Going upward by it, a man at death attains immortality. But when his prana passes out by other arteries, going in different directions, then he is reborn in the world.',
        'The Purusha, not larger than a thumb, the inner Self, always dwells in the hearts of men. Let a man separate Him from his body with steadiness, as one separates the tender stalk from a blade of grass. Let him know that Self as the Bright, as the Immortal, yea, as the Bright, as the Immortal.',
        'Having received this wisdom taught by the King of Death and the entire process of yoga, Nachiketa became free from impurities and death and attained Brahman. Thus it will be also with any other who knows, in this manner, the inmost Self.',
      ]
    }
  },
  {
    id: 'isha-upanishad',
    title: 'Isha Upanishad',
    author: 'Ancient Seers',
    category: 'Upanishads',
    color: '#1f2a33',
    accent: '#c9a227',
    readingTime: 3,
    year: -500,
    rating: 4.9,
    summary: 'The first Upanishad of the Muktika canon, embedded in the Shukla Yajurveda, declaring that all this is pervaded by the Lord and teaching the harmony of karma and jnana.',
    keyIdeas: [
        'The <b>Isha Upanishad</b> is embedded as the final chapter (chapter 40) of the <b>Shukla Yajurveda</b>, belonging to the Samhita layer of the Veda rather than to an Aranyaka or Brahmana.',
        'Its name comes from its opening words, <b>isha vasya</b>, meaning "enveloped by the Lord" or "pervaded by the Lord." It is the <b>first Upanishad in the Muktika canon</b> of 108 Upanishads and one of the ten on which Shankaracharya wrote his commentary.',
        'The text consists of <b>18 verses in the Kanva recension</b> (17 in the Madhyandina), entirely in verse with no prose section, and is the <b>most structurally unified</b> of the shorter Upanishads.',
        'It is the only Upanishad that directly takes up the relationship between <b>karma (action) and jnana (knowledge)</b>, refusing to subordinate one to the other.',
        '<b>Verses 1-2 (Cosmos and Renunciation):</b> all this, whatever moves in the world, is pervaded by Isha; the instruction is not withdrawal but a particular orientation toward action — <b>enjoy through renunciation, do not covet</b>.',
        '<b>Verses 3-8 (The Nature of Atman):</b> those who deny the Self go to sunless worlds; the Atman is <b>unmoving yet faster than the mind, far yet near, within everything and outside everything</b> simultaneously.',
        'Shankaracharya identifies <b>verses 6-8 as the Advaitic core</b>: the knower who sees all beings in the Self and the Self in all beings does not hate; for one who has realized this unity, there is no delusion or sorrow.',
        '<b>Verses 9-14 (Vidya and Avidya):</b> those who pursue only Avidya enter darkness, but those who pursue only Vidya enter even greater darkness; <b>both must be pursued together (ubhayam saha)</b> — Avidya enables one to cross death, Vidya grants immortality.',
        '<b>Verses 15-18 (Closing Prayers):</b> the text shifts from instruction to prayer — the famous golden lid prayer to Surya, and the closing declaration <b>so\'ham asmi</b>, "The Purusha there and there: He am I."',
        'Some scholars (including Patrick Olivelle) consider <b>verses 15-18 to be later additions</b>, citing their overlap with the Brihadaranyaka and a shift in tone.',
    ],
    mainTakeaways: [
        '<b>All this is pervaded by the Lord (Isha)</b>; the appropriate response is to enjoy through renunciation and not covet.',
        'Renunciation is <b>not a matter of leaving the world</b> but of the quality of engagement with it; action done without attachment does not bind.',
        'The Atman is <b>unmoving yet faster than the mind, far yet near, within everything and outside everything</b> simultaneously.',
        '<b>Vidya and Avidya must be pursued together</b>: Avidya enables one to cross death, while Vidya grants immortality.',
        'The closing verses are prayers for <b>direct recognition</b> — the removal of the golden lid — culminating in "The Purusha there and there: <b>He am I.</b>"',
    ],
    importantConcepts: [
        '<b>Isha:</b> The Lord who pervades all, from whose opening words the Upanishad takes its name.',
        '<b>Renunciation (tyaga):</b> Not leaving the world, but a particular orientation toward action — enjoy through renunciation, do not covet.',
        '<b>The Atman:</b> Unmoving yet faster than the mind, far yet near, within and outside everything; Prana, the master of life, is established within it.',
        '<b>Vidya and Avidya:</b> Knowledge and ignorance (or action without knowledge), which must be pursued together (ubhayam saha).',
        '<b>Sambhuti and Asambhuti:</b> Becoming (the manifest) and the unmanifest; exclusive pursuit of either leads to darkness.',
        '<b>The Golden Lid:</b> The golden disc of the sun that illuminates the world while concealing the deeper reality behind it — a prayer for direct recognition.',
        '<b>so\'ham asmi:</b> "The Purusha there and there: He am I" — the mahavakya formula shared with the Brihadaranyaka Upanishad.',
    ],
    practicalLessons: [
        '<b>Enjoy through renunciation</b>: engage with the world without coveting, and action performed without attachment does not bind.',
        '<b>See all beings in the Self and the Self in all beings</b> to be free from hatred, delusion and sorrow.',
        '<b>Pursue knowledge and action together</b> rather than exclusively — the text refuses the sharp opposition between the world and liberation.',
        '<b>Pray for the removal of the golden lid</b>, the covering over the face of truth, that one may behold it directly.',
        'Recognize the Self as <b>unmoving yet faster than the mind, far yet near, within and outside all</b>.',
    ],
    bestQuotes: [
      { text: 'All this—whatsoever moves in this universe—is covered by the Lord. That renounced, enjoy. Do not covet anybody\'s wealth.', cite: 'Isha Upanishad 1' },
      { text: 'It is motionless, one, faster than the mind. It moves, it is motionless. It is distant, it is near. It is within all, it is without all this.', cite: 'Isha Upanishad 4-5' },
      { text: 'The face of truth is covered by a golden lid; O Pushan, remove it so that I, a devotee of truth, may behold it.', cite: 'Isha Upanishad 15' },
      { text: 'He who simultaneously knows both Vidya and Avidya gets over Death by Avidya and attains immortality by Vidya.', cite: 'Isha Upanishad 11' },
      { text: 'I behold thy glorious form; I am he, the Purusha within thee.', cite: 'Isha Upanishad 16' },
    ],
    finalTakeaway: 'The Isha Upanishad, the first in the Muktika canon, teaches that all this, whatever moves in the world, is pervaded by Isha, the Lord. Its distinctive insight is integrative: renunciation is not the abandonment of the world but a transformation of our engagement with it, and Vidya and Avidya must be pursued together — Avidya enabling one to cross death, Vidya granting immortality. The text closes with prayers for direct recognition, culminating in the mahavakya "The Purusha there and there: He am I."',
    translation: {
      translator: 'Swami Sivananda',
      publisher: 'Divine Life Society',
      sanskritVerses: [
        'ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् । तेन त्यक्तेन भुञ्जीथा मा गृधः कस्य स्विद्धनम् ॥ १ ॥',
        'कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः । एवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे ॥ २ ॥',
        'असुर्या नाम ते लोका अन्धेन तमसावृताः । तांस्ते प्रेत्याभिगच्छन्ति ये के चात्महनो जनाः ॥ ३ ॥',
        'अनेजदेकं मनसो जवीयो नैनद्देवा आप्नुवन्पूर्वमर्षत् । तद्धावतोऽन्यानत्येति तिष्ठत्तस्मिन्नपो मातरिश्वा दधाति ॥ ४ ॥',
        'तदेजति तन्नैजति तद्दूरे तद्वन्तिके । तदन्तरस्य सर्वस्य तदु सर्वस्यास्य बाह्यतः ॥ ५ ॥',
        'यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति । सर्वभूतेषु चात्मानं ततो न विजुगुप्सते ॥ ६ ॥',
        'यस्मिन्सर्वाणि भूतान्यात्मैवाभूद्विजानतः । तत्र को मोहः कः शोक एकत्वमनुपश्यतः ॥ ७ ॥',
        'स पर्यगाच्छुक्रमकायमव्रणमस्नाविरंशुद्धम् अपापविद्धम् । कविर्मनीषी परिभूः स्ययम्भूर्याथातथ्यतोऽर्थान्व्यदधाच्छाश्वतीभ्यः समाभ्यः ॥ ८ ॥',
        'अन्धन्तमः प्रविशन्ति येऽविद्यामुपासते । ततो भूय इव ते तमोय उ विद्यायां रताः ॥ ९ ॥',
        'अन्यदेवाहुर्विद्ययाऽन्यदाहुरविद्यया । इति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥ १० ॥',
        'विद्यां चाविद्यां च यस्तद्वेदोभयं सह । अविद्यया मृत्युं तीर्त्वा विद्ययामृतमश्नुते ॥ ११ ॥',
        'अन्धं तमः प्रविशन्ति येऽसम्भूतिमुपासते । ततो भूय इव ते तमो य उ संभूत्यां रताः ॥ १२ ॥',
        'अन्यदेवाहुः संभवादन्यदाहुरसंभवात् । इति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥ १३ ॥',
        'संभूतिं च विनाशं च यस्तद्वेदोभयं सह । विनाशेन मृत्युं तीर्त्वा संभूत्यामृतमश्नुते ॥ १४ ॥',
        'हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम् । तत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये ॥ १५ ॥',
        'पूषन्नेकर्षे यम सूर्य प्राजापत्य व्यूह रश्मीन्समूह । तेजः यत्ते रूपं कल्याणतमं तत्ते पश्यामि योऽसावसौ पुरुषः सोऽहमस्मि ॥ १६ ॥',
        'वायुरनिलममृतमथेदं भस्मान्तं शरीरम् । ओं । क्रतो स्मर कृतं स्मर क्रतो स्मर कृतं स्मर ॥ १७ ॥',
        'अग्ने नय सुपथा राये अस्मान्विश्वानि देव वयुनानि विद्वान् । युयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नम उक्तिं विधेम ॥ १८ ॥',
      ],
      verses: [
        'All this—whatsoever moves in this universe (and those that move not) is covered (indwelt or pervaded or enveloped or clothed) by the Lord. That renounced, enjoy. Do not covet anybody\'s wealth (Or - Do not covet, for whose is wealth?).',
        'Should one wish to live a hundred years on this earth, he should live doing Karma. While thus, (as) man, you live, there is no way other than this by which Karma will not cling to you.',
        'Those births partake of the nature of the Asuras and are enveloped in blind darkness. After leaving the body they who kill their Atman attain them.',
        'It is motionless, one, faster than mind; and the Devas (the senses) could not overtake it which ran before. Sitting, it goes faster than those who run after it. By it, the all-pervading air (Sutratman) supports the activity of all living beings.',
        'It moves, it is motionless. It is distant, it is near. It is within all, it is without all this.',
        'Who sees everything in his Atman and his Atman in everything, by that he feels no revulsion.',
        'When to the knower, all Bhutas become one with his own Atman, what perplexity, what grief, is there when he sees this oneness.',
        'He pervaded all, resplendent, bodiless, scatheless, having no muscles, pure, untouched by sin; far-seeing, omniscient, transcendent, self-sprung, (he) duly allotted to the various eternal creators their respective functions.',
        'They who worship Avidya alone fall into blind darkness; and they who worship Vidya alone fall into even greater darkness.',
        'One result is predicated of Vidya and another of Avidya. We have so heard from wise men who taught us both Vidya and Avidya.',
        'He who simultaneously knows both Vidya and Avidya gets over Death by Avidya and attains immortality by Vidya.',
        'They fall into blind darkness who worship the unborn Prakriti. They fall into greater darkness who are bent upon the Karya Brahman Hiranyagarbha. (12).',
        'They say one thing results from the worship of Hiranyagarbha and another from the worship of Prakriti. We have thus heard it stated by wise preceptors who taught us that.',
        'Those who worship the unmanifested Prakriti and Hiranyagarbha (Destruction) together, get over death through the worship of Hiranyagarbha and attain immortality through the worship of Prakriti.',
        'The entrance of the True is covered as if by a golden vessel. Remove, O sun, the covering that I who have been worshipping "The True" may behold it.',
        'O Sun, sole traveller of the Heavens, controller of all, Surya, son of Prajapati remove thy rays and gather up thy burning light. I behold thy glorious form; I am he, the Purusha within thee.',
        '(Let my) Prana melt into the all-pervading Air, the eternal Sutratman; and let this body he burnt by fire to ashes; Om. O mind, remember, remember my deeds; O mind, remember, remember my deeds.',
        'O Agni, lead us by the good path to the enjoyment of the fruits of our deeds, knowing O God, all our deeds. Remove the sin of deceit from within us. We offer thee many prostrations by word of mouth. (18).',
      ]
    }
  },
  {
    id: 'kaivalya-upanishad',
    title: 'Kaivalya Upanishad',
    author: 'Ancient Seers',
    category: 'Upanishads',
    color: '#2a2533',
    accent: '#c9a227',
    readingTime: 3,
    year: -500,
    rating: 4.9,
    summary: 'A warm and accessible Yoga Upanishad from the Atharva Veda, teaching that the Self stands alone, complete in itself, needing nothing outside to be whole.',
    keyIdeas: [
        'The <b>Kaivalya Upanishad</b> belongs to the <b>Atharva Veda</b> and is counted among the <b>Yoga Upanishads</b>, a group of texts dealing directly with the nature of liberation and the practices that lead to it.',
        '<b>Kaivalya</b> means absolute aloneness or independence — not loneliness, but the recognition that the <b>Self stands alone, complete in itself</b>, needing nothing outside to be whole.',
        'The text is short (about twenty-five verses) and moves quickly from a seeker\'s questions to the highest teaching.',
        'It opens with the sage <b>Ashvalayana approaching Brahma</b> asking how the highest can be known; Brahma\'s answer is the heart of the text.',
        'The teaching: not through ritual, not through wealth, not through offspring, but through <b>renunciation, devotion to the teacher, and sustained meditation</b> on the Self.',
        'Brahman is described as <b>self-luminous awareness</b> — the witness of all experiences, present in the waking state, the dream state, and deep sleep, yet not limited by any of them.',
        'What makes the Kaivalya Upanishad distinctive is the <b>warmth of its tone</b> — it reads almost like a direct conversation between a compassionate teacher and a sincere student.',
        'It is often recommended as a <b>first Upanishad for those new to Vedanta</b>, because its language is clear, its structure is simple, and its teaching is stated without unnecessary complexity.',
    ],
    mainTakeaways: [
        '<b>Not by work, nor by progeny, nor by wealth, but by renunciation alone</b> is immortality attained.',
        'The Self is <b>self-luminous awareness</b> — the witness of all experiences in waking, dream, and deep sleep, yet not limited by any of them.',
        '<b>He alone is all that was and all that will be</b>, the eternal; knowing Him, one goes beyond the sting of death.',
        'Making the ego the lower araṇi and <b>Om the upper araṇi</b>, through the practice of churning Knowledge, a wise man burns up all bondage.',
        'That which is the supreme Brahman, subtler than the subtle, eternal — <b>That alone thou art, thou alone art That</b>.',
    ],
    importantConcepts: [
        '<b>Kaivalya:</b> Absolute aloneness or independence; the Self standing alone, complete in itself, needing nothing outside to be whole.',
        '<b>Ashvalayana:</b> The sage who approaches Brahma as the sincere seeker of the highest knowledge.',
        '<b>Brahma (Pitamaha):</b> The grandsire who gives the teaching, emphasizing faith, devotion, and meditation.',
        '<b>Renunciation (tyaga):</b> The sole means to immortality — not work, progeny, or wealth.',
        '<b>Self-luminous awareness:</b> Brahman as the witness of all experiences, present in all three states of consciousness.',
        '<b>The three states (pura traya):</b> Waking, dream, and deep sleep — the three cities in which the jiva sports.',
        '<b>non-dual Brahman:</b> "I am That non-dual Brahman" — the culminating recognition of the text.',
    ],
    practicalLessons: [
        'Know the highest <b>not through ritual but through renunciation</b>, devotion to the teacher, and sustained meditation.',
        'Meditate in an <b>undisturbed, clean place</b> in a comfortable posture, with neck, head and body held erect.',
        '<b>See your own Self in all beings and all beings in the Self</b> to attain the highest Brahman.',
        'Make the ego the lower araṇi and <b>Om the upper araṇi</b>, churning knowledge through sustained practice.',
        'Realize <b>"That alone thou art, thou alone art That"</b> — the direct identification with the supreme Brahman.',
    ],
    bestQuotes: [
      { text: 'Not by work, nor by progeny, nor by wealth, but by renunciation alone, immortality is attained. Higher than heaven, seated in the cave of the intellect, It shines, which the seekers attain.', cite: 'Kaivalya Upanishad 3' },
      { text: 'He alone is all that was, and all that will be, the eternal; knowing Him, one goes beyond the sting of death; there is no other way to reach complete freedom.', cite: 'Kaivalya Upanishad 9' },
      { text: 'That which is the supreme Brahman, the Self in all, the ample support of the universe, subtler than the subtle and eternal — That alone thou art, thou alone art That.', cite: 'Kaivalya Upanishad 16' },
      { text: 'In me alone everything is born; in me alone does everything exist and in me alone does everything dissolve. I am That non-dual Brahman.', cite: 'Kaivalya Upanishad 19' },
      { text: 'I am smaller than the smallest and also am I the most vast. I am the manifold universe — amazing; I am the ancient one, the Purusha; the supreme Ruler am I.', cite: 'Kaivalya Upanishad 20' },
    ],
    finalTakeaway: 'The Kaivalya Upanishad is a warm and accessible text that teaches the highest truth of Vedanta with clarity and simplicity. Its central message is that the Self stands alone, complete in itself — kaivalya. The teaching is direct: not through ritual, not through wealth, but through renunciation, devotion, and sustained meditation on the Self, one realizes that one is already what one seeks. The text culminates in the recognition "I am That non-dual Brahman."',
    translation: {
      translator: 'Swami Sivananda',
      publisher: 'Divine Life Society',
      sanskritVerses: [
        'अथाश्वलायनो भगवन्तं परमेष्ठिनमुपसमेत्योवाच । अधीहि भगवन्ब्रह्मविद्यां वरिष्ठां सदा सद्भिः सेव्यमानां निगूढाम् । ययाऽचिरात्सर्वपापं व्यपोह्य परात्परं पुरुषं याति विद्वान् ॥ १ ॥',
        'तस्मै स होवाच पितामहश्च श्रद्धाभक्तिध्यानयोगादवैहि ॥ २ ॥',
        'न कर्मणा न प्रजया धनेन त्यागेनैके अमृतत्वमानशुः । परेण नाकं निहितं गुहायां विभ्राजते यद्यतयो विशन्ति ॥ ३ ॥',
        'वेदान्तविज्ञानसुनिश्चितार्थाः संन्यासयोगाद्यतयः शुद्धसत्त्वाः । ते ब्रह्मलोकेषु परान्तकाले परामृताः परिमुच्यन्ति सर्वे ॥ ४ ॥',
        'विविक्तदेशे च सुखासनस्थः शुचिः समग्रीवशिरःशरीरः । अत्याश्रमस्थः सकलेन्द्रियाणि निरुध्य भक्त्या स्वगुरुं प्रणम्य । हृत्पुण्डरीकं विरजं विशुद्धं विचिन्त्य मध्ये विशदं विशोकम् ॥ ५ ॥',
        'अचिन्त्यमव्यक्तमनन्तरूपं शिवं प्रशान्तममृतं ब्रह्मयोनिम् । तथादिमध्यान्तविहीनमेकं विभुं चिदानन्दमरूपमद्भुतम् ॥ ६ ॥',
        'उमासहायं परमेश्वरं प्रभुं त्रिलोचनं नीलकण्ठं प्रशान्तम् । ध्यात्वा मुनिर्गच्छति भूतयोनिं समस्तसाक्षिं तमसः परस्तात् ॥ ७ ॥',
        'स ब्रह्मा स शिवः सेन्द्रः सोऽक्षरः परमः स्वराट् । स एव विष्णुः स प्राणः स कालोऽग्निः स चन्द्रमाः ॥ ८ ॥',
        'स एव सर्वं यद्भूतं यच्च भव्यं सनातनम् । ज्ञात्वा तं मृत्युमत्येति नान्यः पन्था विमुक्तये ॥ ९ ॥',
        'सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि । सम्पश्यन्ब्रह्म परमं याति नान्येन हेतुना ॥ १० ॥',
        'आत्मानमरणिं कृत्वा प्रणवं चोत्तरारणिम् । ज्ञाननिर्मथनाभ्यासात्पाशं दहति पण्डितः ॥ ११ ॥',
        'स एव मायापरिमोहितात्मा शरीरमास्थाय करोति सर्वम् । स्त्र्यन्नपानादिविचित्रभोगैः स एव जाग्रत्परितृप्तिमेति ॥ १२ ॥',
        'स्वप्ने स जीवः सुखदुःखभोक्ता स्वमायया कल्पितजीवलोके । सुषुप्तिकाले सकले विलीने तमोऽभिभूतः सुखरूपमेति ॥ १३ ॥',
        'पुनश्च जन्मान्तरकर्मयोगात्स एव जीवः स्वपिति प्रबुद्धः । पुरत्रये क्रीडति यश्च जीवस्ततस्तु जातं सकलं विचित्रम् । आधारमानन्दमखण्डबोधं यस्मिँल्लयं याति पुरत्रयं च ॥ १४ ॥',
        'एतस्माज्जायते प्राणो मनः सर्वेन्द्रियाणि च । खं वायुर्ज्योतिरापश्च पृथ्वी विश्वस्य धारिणी ॥ १५ ॥',
        'यत्परं ब्रह्म सर्वात्मा विश्वस्यायतनं महत् । सूक्ष्मात्सूक्ष्मतरं नित्यं तत्त्वमेव त्वमेव तत् ॥ १६ ॥',
        'जाग्रत्स्वप्नसुषुप्त्यादिप्रपञ्चं यत्प्रकाशते । तद्ब्रह्माहमिति ज्ञात्वा सर्वबन्धैः प्रमुच्यते ॥ १७ ॥',
        'त्रिषु धामसु यद्भोग्यं भोक्ता भोगश्च यद्भवेत् । तेभ्यो विलक्षणः साक्षी चिन्मात्रोऽहं सदाशिवः ॥ १८ ॥',
        'मय्येव सकलं जातं मयि सर्वं प्रतिष्ठितम् । मयि सर्वं लयं याति तद्ब्रह्माद्वयमस्म्यहम् ॥ १९ ॥',
        'अणोरणीयानहमेव तद्वन्महानहं विश्वमहं विचित्रम् । पुरातनोऽहं पुरुषोऽहमीशो हिरण्मयोऽहं शिवरूपमस्मि ॥ २० ॥',
        'अपाणिपादोऽहमचिन्त्यशक्तिः पश्याम्यचक्षुः स शृणोम्यकर्णः । अहं विजानामि विविक्तरूपो न चास्ति वेत्ता मम चित्सदाऽहम् ॥ २१ ॥',
        'वेदैरनेकैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् । न पुण्यपापे मम नास्ति नाशो न जन्म देहेन्द्रियबुद्धिरस्ति ॥ २२ ॥',
        'न भूमिरापो न च वह्निरस्ति न चानिलो मेऽस्ति न चाम्बरं च । एवं विदित्वा परमात्मरूपं गुहाशयं निष्कलमद्वितीयम् । समस्तसाक्षिं सदसद्विहीनं प्रयाति शुद्धं परमात्मरूपम् ॥ २३-२४ ॥',
      ],
      verses: [
        'O Bhagavan! Teach me the highest science of Reality, cultivated always by the good people, which is ever a hidden secret for man, a Knowledge by which a wise man, discarding all sins, can reach the highest Purusha.',
        'To him the grandsire (Brahma) said, "Know this by means of faith, devotion and meditation."',
        'Not by work, nor by progeny, nor by wealth, but by renunciation alone, immortality is attained. Higher than heaven, seated in the cave of the intellect, It shines, which the seekers attain.',
        'Those who are pure in mind, striving through the path of renunciation, come to ascertain clearly the deeper imports of the Knowledge, which is the theme of the Upanishads (Vedanta); they, in the end, gain the world of Brahma, and liberating themselves from everything gain the highest immortality.',
        'In an undisturbed place, clean and pure, resting in a comfortable posture, with neck, head and body held erect in one line, in a mental attitude of sannyasa, having controlled all the senses, saluting one\'s own Teacher mentally with reverence, meditate within the lotus of the heart (on Brahman), the untainted, the pure, the clear and the griefless.',
        'The unthinkable, the unmanifest, the one of endless forms, the ever auspicious, the peaceful, the immortal, the origin of the very Creator, the one without a beginning, a middle and an end, the only one, the all-pervading, the Knowledge-Bliss, the formless, and the wonderful.',
        'By meditating upon Lord Parameshvara consorted by mother Uma, the highest Lord, the all-powerful, the three eyed, the blue necked and the ever tranquil, a true man of reflection reaches Him, who is the source of all the manifested world, the witness of all and the one who is beyond all darkness.',
        'He is Brahma, He is Shiva, He is Indra, He is the immutable, the Supreme, the Self-luminous. He alone is Vishnu, He is Prana, He is Time and Fire. He is the Moon.',
        'He alone is all that was, and all that will be, the eternal; knowing Him, one goes beyond the sting of death; there is no other way to reach complete freedom.',
        'Experiencing one\'s own Self in all beings and all beings in the Self, one attains the highest Brahman and not by any other means.',
        'Making the ego the lower araṇi and Om the upper araṇi, through the practice of repeated churning of Knowledge (jñana-nirmathana-abhyasa) a wise man burns up all the chords of his bondage.',
        'The Self, deluded by maya is he, who identifying with the body does all actions (all perceptions, feelings and thoughts). In the waking state it is he (this jiva), who reaches full gratification through the varied objects of enjoyment such as woman, food, wine and so on.',
        'The very same individualised ego in the dream state experiences its pleasures and pains in a field of existence created by its own maya (misapprehension of Reality). During the state of profound sleep when everything is merged (into their causal state), it is overpowered by tamas (non-apprehension) and comes to exist in its form of bliss.',
        'Again due to its connection with the deeds done in its previous births, that very same individuality (jiva) comes back to the dream or the waking state. The being, who sports thus in the three cities from whom verily have sprung up all diversities, He is the substratum, the indivisible Bliss-Consciousness and in Him alone the three cities go back into dissolution.',
        'From Him are born the prana (life), the mind (antahkarana), all the organs (indriyani), the sky (akasha), the wind (vayu), the fire (jyotih), the water (apah) and the earth (prithivi). He is the supporter of everything.',
        'That which is the supreme Brahman, the Self in all, the ample support of the universe, subtler than the subtle and eternal — That alone thou art, thou alone art That.',
        'That which illumines the world of relative experiences lived in the waking, dream and deep sleep conditions, that Brahman am I — and realising thus, one is liberated from all shackles.',
        'All that constitutes the enjoyable, the enjoyer and the enjoyment in the three realms — different from them all am I, the witness, the ever-auspicious, pure Consciousness.',
        'In me alone everything is born; in me alone does everything exist and in me alone does everything dissolve. I am That non-dual Brahman.',
        'I am smaller than the smallest and also am I the most vast. I am the manifold universe — amazing; I am the ancient one, the Purusha; the supreme Ruler am I, the effulgent one, by nature ever auspicious.',
        'I am without hands and legs, of incomprehensible power. I see without eyes, hear without ears. Devoid of all forms, I am knowing (everything) and there is none that knows Me. I am ever pure Knowledge.',
        'I alone am the theme taught in the different Vedas, I am the revealer of the Upanishads, the Vedanta and I alone am the real knower of the Vedas. For Me there is neither merit nor demerit. I suffer no destruction. I have neither birth nor body, nor sense organs, nor the mind-intellect equipment.',
        'For Me there is neither earth nor water, nor fire, nor air, nor ether. Thus realising the nature of the Paramātman — the one who is in the cavity of the heart, who is without parts, without a second, the witness of all, beyond both existence and non-existence, one attains the very nature of the Paramātman.',
      ]
    }
  },
  {
    id: '48-laws-of-power',
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    category: 'Strategy',
    color: '#3a1f1f',
    accent: '#c9a227',
    readingTime: 18,
    year: 1998,
    rating: 4.6,
    summary: 'A ruthless and timeless study of power drawn from three thousand years of history, distilling the strategies, tricks and laws of Machiavelli, Sun Tzu and history\'s great schemers into forty-eight practical rules.',
    keyIdeas: [
      'The 48 Laws of Power distills <b>three thousand years of history</b> into 48 practical rules, drawn from figures like Machiavelli, Sun Tzu, Catherine the Great, and the Medici.',
      'Power is in many ways a <b>game of appearances</b>: those who control their image and words control how others see them.',
      'The book refuses to moralize — it presents the <b>mechanics of power as they are</b>, not as we wish them to be, showing how both the powerful and the powerless have used these laws throughout history.',
      'The laws are grouped into sections on <b>self-preservation, social intelligence, reputation, and manipulation</b>, each illustrated with historical anecdotes and their "transgressions" and "observances."',
      'Many of the laws are <b>counter-intuitive</b>: say less, seem dumber, surrender, avoid perfection, and stay formless.',
      'The overarching lesson is that <b>power is not about force but about strategy</b> — patience, calculation, and the ability to read and influence people.',
    ],
    mainTakeaways: [
      'Never outshine the master: <b>make those above you appear more brilliant</b> than they are, or they will destroy you.',
      '<b>Say less than necessary</b>: words once spoken cannot be taken back, and silence makes you appear greater and more powerful.',
      '<b>Guard your reputation with your life</b> — doubt and rumor are the most powerful weapons against it.',
      '<b>Court attention at all costs</b>: it is better to be slandered and attacked than ignored.',
      '<b>Win through action, never through argument</b> — demonstrate, do not explain.',
      '<b>Create value through scarcity</b>: use absence to increase strength and honor.',
      '<b>Plan all the way to the end</b>, and keep yourself adaptable, fluid, and formless.',
    ],
    importantConcepts: [],
    laws: [
      { num: 1, title: 'Never Outshine the Master', detail: 'Make your masters appear more brilliant than they are and you will attain the heights of power. Outshining the master is perhaps the worst mistake of all; never take your position for granted, and never let favors you receive go to your head.' },
      { num: 2, title: 'Never Put Too Much Trust in Friends, Learn How to Use Enemies', detail: 'A former enemy has more to prove and will be more loyal than a friend. You have more to fear from friends than from enemies — honesty rarely strengthens friendship. Keep friends for friendship, but work with the skilled and competent.' },
      { num: 3, title: 'Conceal Your Intentions', detail: 'Use decoyed objects and desires, and red herrings, to throw people off the scent. Hide your intentions not by closing up, but by talking endlessly about your goals — just not your real ones. As Kierkegaard wrote, "The world wants to be deceived."' },
      { num: 4, title: 'Always Say Less Than Necessary', detail: 'Power cannot accrue to those who squander their treasure of words. Once the words are out, you cannot take them back; keep them under control. When you say less than necessary, you inevitably appear greater and more powerful than you are.' },
      { num: 5, title: 'So Much Depends on Reputation — Guard It with Your Life', detail: 'Be alert to potential attacks and thwart them before they happen. Learn to destroy your enemies by opening holes in their own reputations, then stand aside and let public opinion hang them. Doubt is a powerful weapon.' },
      { num: 6, title: 'Court Attention at All Costs', detail: 'Surround your name with the sensational and the scandalous. Better to be slandered and attacked than ignored. Create an air of mystery — by holding back, keeping silent, and acting in the subtlest of ways, you will emanate an aura people magnify by trying to interpret.' },
      { num: 7, title: 'Get Others to Do the Work for You, but Always Take the Credit', detail: '' },
      { num: 8, title: 'Make Other People Come to You, Use Bait If Necessary', detail: 'For negotiations or meetings, lure others into your territory, or the territory of your choice. You have your bearings, while they see nothing familiar and are subtly placed on the defensive.' },
      { num: 9, title: 'Win Through Your Actions, Never Through Argument', detail: '' },
      { num: 10, title: 'Infection: Avoid the Unhappy and the Unlucky', detail: 'When you suspect you are in the presence of an infector, do not argue, do not try to help, and do not pass the person on to your friends — you will become enmeshed. Flee the infector\'s presence or suffer the consequences.' },
      { num: 11, title: 'Learn to Keep People Dependent on You', detail: '' },
      { num: 12, title: 'Use Selective Honesty and Generosity to Disarm Your Victim', detail: '' },
      { num: 13, title: 'When Asking for Help, Appeal to People\'s Self-Interest, Never Their Mercy or Gratitude', detail: '' },
      { num: 14, title: 'Pose as a Friend, Work as a Spy', detail: '' },
      { num: 15, title: 'Crush Your Enemy Totally', detail: '' },
      { num: 16, title: 'Use Absence to Increase Strength and Honor', detail: 'The more you are seen and heard from, the more common you appear. If you are established in a group, temporary withdrawal will make you more talked about and more admired. Create value through scarcity, and learn when to leave.' },
      { num: 17, title: 'Keep Others in Suspended Terror: Cultivate an Air of Unpredictability', detail: 'Patterns are powerful, and you can terrify people by disrupting them. But too much unpredictability reads as indecisiveness or instability, so use this power judiciously.' },
      { num: 18, title: 'Do Not Build a Fortress to Protect Yourself — Isolation Is Dangerous', detail: '' },
      { num: 19, title: 'Know Who You\'re Dealing With — Do Not Offend the Wrong Person', detail: '' },
      { num: 20, title: 'Do Not Commit to Anyone', detail: 'Do not commit to anyone, but be courted by all. When you hold yourself back, you incur not anger but a kind of respect — you make yourself ungraspable. Every moment wasted on the affairs of others subtracts from your strength.' },
      { num: 21, title: 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark', detail: 'Given how important intelligence is to most people\'s vanity, it is critical never to inadvertently insult or impugn a person\'s brain power.' },
      { num: 22, title: 'Use the Surrender Tactic: Transform Weakness into Power', detail: 'When someone pushes you, do not resist or fight back — yield, turn the other cheek, bend. By surrendering, you have an opportunity to coil around your enemy and strike with your fangs from close up.' },
      { num: 23, title: 'Concentrate Your Forces', detail: 'Intensity defeats extensity every time.' },
      { num: 24, title: 'Play the Perfect Courtier', detail: 'Avoid ostentation, practice nonchalance, be frugal with flattery, arrange to be noticed, alter your style according to the person, never be the bearer of bad news, never criticize those above you directly, master your emotions, and be the source of pleasure.' },
      { num: 25, title: 'Re-Create Yourself', detail: 'Be the master of your own image rather than letting others define it. The world wants to assign you a role in life, and once you accept that role you are doomed. Remake yourself into a character of power, beginning with self-consciousness.' },
      { num: 26, title: 'Keep Your Hands Clean', detail: 'Conceal your mistakes and have a scapegoat around to blame. Make use of the cat\'s paw.' },
      { num: 27, title: 'Play on People\'s Need to Believe to Create a Cult-Like Following', detail: 'Keep it vague and simple; emphasize the visual and sensational over the intellectual; borrow the forms of organized religion; disguise your source of income; and set up an us vs. them dynamic.' },
      { num: 28, title: 'Enter Action with Boldness', detail: 'The bolder the lie, the better. Boldness strikes fear, and fear creates authority. Hesitation creates gaps, boldness obliterates them. When you are small and obscure, find a Goliath to attack — the larger the target, the more attention you gain.' },
      { num: 29, title: 'Plan All the Way to the End', detail: '' },
      { num: 30, title: 'Make Your Accomplishments Seem Effortless', detail: '' },
      { num: 31, title: 'Control the Options: Get Others to Play with the Cards You Deal', detail: 'Color the choices — propose three or four options and present them so the one you prefer seems best. Give people a sense of how things will fall apart without you. Shrink the options by raising the price each time the buyer hesitates.' },
      { num: 32, title: 'Play to People\'s Fantasies', detail: 'People rarely believe that their problems arise from their own misdeeds and stupidity; someone or something out there is to blame. Therefore salvation comes from the outside as well — play to that fantasy.' },
      { num: 33, title: 'Discover Each Man\'s Thumbscrew', detail: 'Everyone has a weakness, a gap in the castle wall — usually an insecurity, an uncontrollable emotion or need, or a small secret pleasure. Once found, it is a thumbscrew you can turn to your advantage.' },
      { num: 34, title: 'Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One', detail: '' },
      { num: 35, title: 'Master the Art of Timing', detail: '' },
      { num: 36, title: 'Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge', detail: 'You choose to let things bother you — you can just as easily choose not to notice the irritating offender. The more you want something, the more it eludes you; uncontrollable desire makes you seem weak, unworthy, pathetic.' },
      { num: 37, title: 'Create Compelling Spectacles', detail: '' },
      { num: 38, title: 'Think as You Like but Behave Like Others', detail: 'If Machiavelli had a prince for a disciple, the first thing he would recommend would be to write a book against Machiavellism. Blend in while thinking independently.' },
      { num: 39, title: 'Stir Up Waters to Catch Fish', detail: 'Anger and emotion are strategically counterproductive — you must always stay calm and objective. But if you can make your enemies angry while staying calm yourself, you gain a decided advantage.' },
      { num: 40, title: 'Despise the Free Lunch', detail: 'The worth of money is not in its possession, but in its use.' },
      { num: 41, title: 'Avoid Stepping into a Great Man\'s Shoes', detail: '' },
      { num: 42, title: 'Strike the Shepherd and the Sheep Will Scatter', detail: 'Trouble within any group can most often be traced to a single source — the unhappy, chronically dissatisfied one who stirs up dissension. Act before it becomes impossible to disentangle.' },
      { num: 43, title: 'Work on the Hearts and Minds of Others', detail: 'The key to persuasion is softening people up and breaking them down gently. Seduce them with a two-pronged approach: work on their emotions and play on their intellectual weaknesses.' },
      { num: 44, title: 'Disarm and Infuriate with the Mirror Effect', detail: 'When you mirror your enemies, doing exactly as they do, they cannot figure out your strategy. The mirror effect mocks and humiliates them, making them overreact.' },
      { num: 45, title: 'Preach the Need to Change, but Never Reform Too Much at Once', detail: 'If change is necessary, make it feel like a gentle improvement on the past. People understand the need for renewal, but are irritated by changes that affect them personally.' },
      { num: 46, title: 'Never Appear Too Perfect', detail: 'Envy creates silent enemies. It is smart to occasionally display defects and admit to harmless vices, to deflect envy and appear more human and approachable.' },
      { num: 47, title: 'Do Not Go Past the Mark You Aimed For: In Victory, Know When to Stop', detail: '' },
      { num: 48, title: 'Assume Formlessness', detail: 'By taking a shape, by having a visible plan, you open yourself to attack. Keep yourself adaptable and on the move. Be as fluid and formless as water; never bet on stability or lasting order, for everything changes.' },
    ],
    practicalLessons: [
      '<b>Make your masters appear more brilliant than they are</b> and never let favors go to your head — outshining the master is the worst mistake of all.',
      '<b>Hire former enemies over friends</b>: an enemy turned ally has more to prove; you have more to fear from friends than enemies.',
      '<b>Control your words</b>: be careful with sarcasm — the momentary satisfaction is outweighed by the price you pay.',
      '<b>Thwart attacks on your reputation</b> before they happen, and destroy enemies by opening holes in their own reputations.',
      '<b>Yield instead of fighting back</b>: surrendering lets you coil around your enemy and strike from close up.',
      '<b>Boldly enter action</b> — hesitation creates gaps and breeds contempt; audacity separates you from the herd.',
      '<b>Stay fluid and formless</b>: never bet on stability or lasting order, for everything changes.',
    ],
    bestQuotes: [
      { text: 'Once the words are out, you cannot take them back. Keep them under control.', cite: 'Law 4 — Always say less than necessary' },
      { text: 'The world wants to be deceived.', cite: 'Søren Kierkegaard, in Law 3' },
      { text: 'Better to be slandered and attacked than ignored.', cite: 'Law 6 — Court attention at all costs' },
      { text: 'Intensity defeats extensity every time.', cite: 'Law 23 — Concentrate your forces' },
      { text: 'The world wants to assign you a role in life. And once you accept that role you are doomed.', cite: 'Law 25 — Re-Create Yourself' },
      { text: 'The best way to protect yourself is to be as fluid and formless as water; never bet on stability or lasting order. Everything changes.', cite: 'Law 48 — Assume formlessness' },
    ],
    finalTakeaway: 'The 48 Laws of Power is a dark but honest study of the mechanics of influence, drawn from three thousand years of history. Its central insight is that power is a game of appearances: reputation, self-control, timing and strategy matter more than force or argument. The laws are counter-intuitive — say less, conceal your intentions, use enemies, surrender, avoid perfection, remain formless — yet each is grounded in the repeated patterns of history. Read as a warning rather than a manual, the book reveals both how power operates and how readily it corrupts.'
  },
  {
    id: 'art-of-seduction',
    title: 'The Art of Seduction',
    author: 'Robert Greene',
    category: 'Strategy',
    color: '#3a1a2a',
    accent: '#d4a574',
    readingTime: 16,
    year: 2001,
    rating: 4.5,
    summary: 'A controversial masterwork on psychology, influence, and social dynamics, arguing that seduction is not merely a sexual pursuit but the ultimate form of soft power and manipulation.',
    keyIdeas: [
      'Seduction does not begin with tactics; it begins with your <b>character</b>. Greene identifies <b>nine distinct seductive archetypes</b>, each appealing to a specific human vulnerability.',
      'The <b>nine archetypes</b>: the Siren (raw sensual release), the Rake (obsessive pursuer), the Ideal Lover (mirrors unfulfilled desires), the Dandy (ambiguous, self-created), the Natural (child-like innocence), the Coquette (push-pull tension), the Charmer (deflects attention onto the target), the Charismatic (intense magnetic energy), and the Star (glamorous object of worship).',
      'The <b>Anti-Seducer</b> chapter warns against types that kill attraction: the Brute (impatient, insensitive), the Bore (talks only of themselves), the Tightwad (cheap in spirit), the Windbag (loves the sound of their own voice), and the Moralizer (highly judgmental).',
      'The seductive process is organized into <b>24 maneuvers across four phases</b>: Separation (stirring interest), Lead Astray (pleasure and confusion), The Precipice (extreme measures), and The Kill (physical and mental surrender).',
      '<b>Phase 1 — Separation (steps 1-8)</b>: choose the right victim, approach indirectly, send mixed signals, create triangles of desire, stir discontent, master insinuation, enter their spirit, create temptation.',
      '<b>Phase 2 — Lead Astray (steps 9-15)</b>: keep them in suspense, use words to sow confusion, pay attention to detail, poeticize your presence, disarm through vulnerability, confuse desire with reality, isolate the victim.',
      '<b>Phase 3 — The Precipice (steps 16-20)</b>: prove yourself through action, effect a regression to childhood, stir the transgressive and taboo, use spiritual lures, mix pleasure with pain.',
      '<b>Phase 4 — The Kill (steps 21-24)</b>: give them space to fall, use physical lures, master the bold move, beware of the aftereffects.',
      'Greene\'s framework has been classified as drawing on the <b>Dark Triad</b> (Machiavellianism, narcissism, psychopathy) and heavily criticized in modern ethical discourse for encouraging boundary-crossing and disregarding consent.',
    ],
    mainTakeaways: [
      'Seduction is the <b>ultimate form of soft power</b> — in modern egalitarian societies where direct force is unacceptable, power has gone underground into influence and manipulation.',
      '<b>Character before tactics</b>: you must embody a seductive archetype before applying any maneuver; the archetype does the heavy lifting.',
      'Human desire responds to <b>tension, absence, and scarcity</b> — the Coquette\'s push-pull dynamic is the single most powerful seductive pattern.',
      '<b>Isolation is essential</b>: to fully influence someone, you must pull them away from their support networks — friends, family, and familiar environments.',
      'The book can be read as a <b>diagnostic map rather than a manual</b>: by understanding the patterns, one can recognize when being manipulated by politicians, marketers, toxic partners, or cult leaders.',
    ],
    importantConcepts: [],
    chapters: [
      { num: 1, title: 'The Siren', detail: '<b>Concept:</b> The ultimate male fantasy — a pure, unrestrained release of sexual energy coupled with an air of danger. Historically, men are burdened by the pressure to be rational, responsible, and in control; the Siren offers an escape from this burden. <b>Mechanics:</b> a slow, breathy, musical voice; a hyper-feminine, theatrical, visually arresting look (often with water, mirrors, and lavish fabrics); a distant yet intensely focused demeanor. <b>Exemplar:</b> Cleopatra — not the most beautiful woman in Egypt, but a master of theatrical spectacle, arriving to meet Mark Antony on a gilded barge dressed as Venus. <b>Danger:</b> appearing too calculating or aggressive triggers suspicion and destroys the mystique.' },
      { num: 2, title: 'The Rake', detail: '<b>Concept:</b> The ultimate female fantasy — an insatiable, obsessive pursuer willing to cross any boundary to conquer. Men fear the Rake as a rival, but women are drawn to his reputation for infidelity and his intense, singular focus. <b>Mechanics:</b> poetic, urgent, hyperbolic declarations of love; a track record of broken hearts that paradoxically makes him more attractive (women want to be the one who finally tames him); open defiance of societal norms. <b>Exemplar:</b> Lord Byron or Gabriele D\'Annunzio — Byron\'s scandalous lifestyle and dark poetic focus made him irresistible to nineteenth-century women trapped in conventional marriages. <b>Danger:</b> overstaying his welcome — his appeal is fleeting, and if he settles down or loses his edge he becomes pathetic.' },
      { num: 3, title: 'The Ideal Lover', detail: '<b>Concept:</b> Most people harbor shattered childhood dreams and unfulfilled ideals; the Ideal Lover senses what is missing in the target\'s life and reflects it back, acting as a mirror of their fantasy self. <b>Mechanics:</b> meticulous observation to discover what the target lacks (adventure, romance, intellectual validation), then shaping one\'s identity to fill that void — representing bohemian freedom for someone bored by corporate life. <b>Exemplar:</b> Casanova — he observed his lovers\' deepest unfulfilled longings and fulfilled them, whether for intellectual discourse, high society, or simple adventure. <b>Danger:</b> exhaustion — maintaining a projection of another person\'s ideal self is emotionally and physically taxing.' },
      { num: 4, title: 'The Dandy', detail: '<b>Concept:</b> Plays with gender roles, social conventions, and identity — ambiguous, non-conformist, self-created. By refusing traditional masculinity or femininity, the Dandy projects a captivating independence. <b>Mechanics:</b> androgyny (blending male and female traits — a man with delicate refined taste, a woman with cold intellectual authority); indifference (dressing and acting to please oneself, not others, which makes others desperate to please them). <b>Exemplar:</b> Rudolf Valentino or Beau Brummell — Valentino combined masculine strength with delicate, almost feminine vulnerability, driving early twentieth-century audiences wild. <b>Danger:</b> insolence — if too arrogant, cold, or self-absorbed, they alienate people.' },
      { num: 5, title: 'The Natural', detail: '<b>Concept:</b> As we grow older we suppress our playfulness, innocence, and spontaneity; the Natural accesses these lost childhood qualities. Honest, unpretentious, vulnerable, and playful, they bypass intellectual defenses. <b>Mechanics:</b> a child-like aura — acting without calculation, showing weakness without shame, displaying wonder; and the Imp — playfully rebellious, teasing, pushing boundaries without malice. <b>Exemplar:</b> Charlie Chaplin or Josephine Baker — Baker won over Parisian society with wild, uninhibited, seemingly innocent energy that bypassed the intellectual defenses of the French elite. <b>Danger:</b> if the innocence is exposed as a calculated act, the Natural becomes a manipulative fraud.' },
      { num: 6, title: 'The Coquette', detail: '<b>Concept:</b> Seduction relies on tension, and the Coquette is the master of the push-and-pull dynamic — promising pleasure and warmth, then withdrawing it, leaving the target insecure, obsessed, and desperate to win back their favor. <b>Mechanics:</b> cold and hot (alternating between intense attention and cold indifference); self-sufficiency (presenting complete independence — they do not need you; you need them). <b>Exemplar:</b> Andy Warhol — he captivated the elite art world by remaining passive, silent, and emotionally unavailable, forcing socialites and artists to compete for his attention. <b>Danger:</b> playing too cold for too long makes the target grow tired and abandon the pursuit.' },
      { num: 7, title: 'The Charmer', detail: '<b>Concept:</b> While other archetypes attract attention to themselves, the Charmer deflects attention entirely onto the target, making them feel beautiful, intelligent, understood, and superior. <b>Mechanics:</b> validation — agreeing with the target\'s opinions, validating their insecurities, praising their strengths; deflecting conflict — never arguing, finding ways to agree or bypass confrontation gracefully. <b>Exemplar:</b> Benjamin Franklin — at the court of Louis XVI he did not demand aid for the American Revolution; he flattered the French, adopted their customs, and charmed the entire court. <b>Danger:</b> being exposed as disingenuous or spineless.' },
      { num: 8, title: 'The Charismatic', detail: '<b>Concept:</b> Charisma is an intense, magnetic energy that radiates from within, often rooted in a deep sense of purpose, self-belief, or a connection to the divine or unconscious. <b>Mechanics:</b> the stare (intense, penetrating eye contact); the savior complex (presenting oneself as a leader who can deliver people from suffering); the mystery (keeping parts of one\'s background and intentions hidden). <b>Exemplar:</b> Joan of Arc or Rasputin — Rasputin\'s intense, unblinking gaze and absolute confidence in his spiritual authority allowed him to manipulate the Russian royal family. <b>Danger:</b> charisma is fragile — if the leader fails to deliver or shows vulnerability or fear, the illusion instantly shatters.' },
      { num: 9, title: 'The Star', detail: '<b>Concept:</b> The Star is an object of worship — glamorous, distant, larger-than-life, living in a world of illusion, luxury, and style, allowing ordinary people to escape their mundane lives through them. <b>Mechanics:</b> ethereal quality (standing out through impeccable style and posture); blank slate (remaining mysterious so others can project their own desires onto them). <b>Exemplar:</b> Marilyn Monroe or John F. Kennedy — Monroe was a master of lighting, angles, and breathy vulnerability, turning herself from a normal girl into an idealized cinematic goddess. <b>Danger:</b> becoming too distant — if a Star is too detached, they become cold and unrelatable.' },
      { num: 10, title: 'The Anti-Seducer', detail: '<b>Concept:</b> A warning of what not to do — Anti-Seducers are insecure, self-absorbed, and blind to the psychology of others. <b>The Brute:</b> impatient, demanding, insensitive to nuance. <b>The Bore:</b> talks only about themselves and their narrow interests. <b>The Tightwad:</b> cheapness in money translates to cheapness of spirit and emotion. <b>The Windbag:</b> loves the sound of their own voice; never listens. <b>The Moralizer:</b> wants you to conform to their standards; highly judgmental.' },
      { num: 11, title: 'Phase 1: Separation — Stirring Interest (Steps 1-8)', detail: '<b>Step 1 — Choose the Right Victim:</b> do not target the naturally resistant or fully satisfied; look for the bored, lonely, or discontent. <b>Step 2 — Approach Indirectly:</b> never make intentions obvious; approach through a third party or platonic friendship, letting them feel in control. <b>Step 3 — Send Mixed Signals:</b> inconsistency captures attention and makes them think about you constantly. <b>Step 4 — Create Triangles:</b> appear to be an object of desire; social proof bypasses skepticism. <b>Step 5 — Create a Need:</b> subtly point out their flaws and discontent, then position yourself as the solution. <b>Step 6 — Master Insinuation:</b> plant ideas through subtext and glances; let them believe the thoughts were their own. <b>Step 7 — Enter Their Spirit:</b> adapt to their mood, tastes, and lifestyle to lower their guard. <b>Step 8 — Create Temptation:</b> find the target\'s secret, repressed desire and offer a glimpse of it.' },
      { num: 12, title: 'Phase 2: Lead Astray — Pleasure and Confusion (Steps 9-15)', detail: '<b>Step 9 — Keep Them in Suspense:</b> predictability kills romance; surprise them and change plans. <b>Step 10 — Use the Demonic Power of Words:</b> use language to alter emotional states, not convey information — hyperbole, sweet phrases, poetic vagueness. <b>Step 11 — Pay Attention to Detail:</b> seduction is aesthetic; master lighting, scent, and thoughtful gifts. <b>Step 12 — Poeticize Your Presence:</b> hide mundane struggles, cultivate romance, let absences be felt. <b>Step 13 — Strategic Weakness:</b> reveal a vulnerability to trigger protective instincts. <b>Step 14 — The Perfect Illusion:</b> create a dream world, a theatrical escape from harsh reality. <b>Step 15 — Isolate the Victim:</b> pull them away from friends, family, and familiar environments so they rely on you.' },
      { num: 13, title: 'Phase 3: The Precipice — Extreme Measures (Steps 16-20)', detail: '<b>Step 16 — Prove Yourself:</b> actions prove depth; act heroically in a crisis to dispel doubts. <b>Step 17 — Effect a Regression:</b> tap into childhood memories to trigger a vulnerable, childlike state. <b>Step 18 — Stir the Transgressive and Taboo:</b> shared guilt and excitement of crossing a boundary binds you together. <b>Step 19 — Use Spiritual Lures:</b> frame the connection as destiny, soulmates, or cosmic — making seduction feel pure and noble. <b>Step 20 — Mix Pleasure with Pain:</b> a sudden calculated bout of pain (coldness, jealousy, withdrawal) doubles the pleasure when you return with warmth.' },
      { num: 14, title: 'Phase 4: The Kill — Physical and Mental Surrender (Steps 21-24)', detail: '<b>Step 21 — Give Them Space to Fall:</b> back off at the peak of tension; the target will panic, pursue you, and convince themselves they are the seducer. <b>Step 22 — Use Physical Lures:</b> shift from mind to body — lingering touches, intense eye contact, sensuous environments. <b>Step 23 — Master the Bold Move:</b> do not hesitate; make a bold, decisive, aggressive move when the target is confused, isolated, and primed. <b>Step 24 — Beware the Aftereffects:</b> manage the aftermath — continue minor seductions to keep them, or end it cleanly without lingering resentment.' },
    ],
    practicalLessons: [
      '<b>Choose your target wisely:</b> look for the bored, lonely, or discontent — a fully content person cannot be seduced.',
      '<b>Never approach directly:</b> indirect approaches bypass psychological defenses; let the target feel in control.',
      '<b>Send mixed signals:</b> inconsistency makes people think about you constantly, trying to solve the puzzle.',
      '<b>Create triangles of desire:</b> humans desire what others want — social proof bypasses skepticism.',
      '<b>Master push-pull:</b> alternate between warmth and cold indifference to create obsession.',
      '<b>Isolate the victim:</b> pull them away from friends and family to become their sole source of validation.',
      '<b>Know when to make the bold move:</b> hesitation shows weakness; be decisive when the target is confused and primed.',
    ],
    bestQuotes: [
      { text: 'Seduction does not begin with tactics; it begins with your character.', cite: 'The Art of Seduction — Introduction' },
      { text: 'The Siren offers an escape from the burden of rationality and control.', cite: 'Chapter 1 — The Siren' },
      { text: 'A completely content person cannot be seduced.', cite: 'Step 5 — Stir Anxiety and Discontent' },
      { text: 'Predictability kills romance.', cite: 'Step 9 — Keep Them in Suspense' },
      { text: 'If you can provide a theatrical, idealized escape — reminiscent of movies or fairy tales — they will lose all connection to reality.', cite: 'Step 14 — The Perfect Illusion' },
      { text: 'Power has gone underground. Seduction becomes the ultimate democratic weapon — allowing the socially weak to overpower the strong.', cite: 'Critical Perspective — Seduction as Soft Power' },
    ],
    finalTakeaway: 'The Art of Seduction is a complex, controversial work that sits at the intersection of psychology, history, and social dynamics. Greene\'s central argument — that seduction is the ultimate form of soft power, operating through nine archetypes and twenty-four maneuvers — reveals both how influence works in modern society and how easily it can be exploited. The book is best read as a diagnostic map: by understanding these patterns, one can recognize them in politics, marketing, cult leaders, and toxic relationships. The ethical critique is essential — the techniques Greene describes have been co-opted by manipulative subcultures, and the book\'s assumption that "no" is often a defense mechanism rather than a true refusal is deeply problematic in contemporary discourse on consent.'
  },
  {
    id: 'aparokshanubhuti',
    title: 'Aparokshanubhuti',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 3,
    year: 800,
    rating: 4.8,
    summary: 'Direct Self-Realization, an introductory guide to realizing the non-dual Self directly, beyond intellectual understanding.',
    keyIdeas: [
        '<b>Aparokshanubhuti</b> means "Direct Experience of the Absolute" or <b>Self-Realization</b>, an introductory work by Adi Shankarāchārya expounding Advaita Vedanta.',
        '<b>Aparoksha</b> refers to the "nearest of the near", one\'s own Self; <b>anubhuti</b> means to realize, to experience. Unlike knowledge of objects through sense-perception or inference, it is an <b>immediate and direct perception</b> of the Self.',
        'The central theme is the <b>identity of Jivatman (individual Self) and Paramatman (Universal Self)</b>, realized through the removal of ignorance by the light of <b>Vichara (enquiry)</b> alone.',
        'Certain <b>disciplines are laid down</b> as indispensable for all enquiry into the highest Truth, preparing the mind for such an investigation.',
        'The book then describes <b>one who has attained this realization</b> and the nature of his life, followed by a discussion on <b>Prarabdha</b>, the momentum of past actions.',
        'Verses 100 to 129 deal with the <b>fifteen stages</b> through which the seeker after Truth passes, culminating in the oneness of cause and effect, the Absolute and the manifested universe.',
    ],
    mainTakeaways: [
        'Aparokshanubhuti is a <b>Prakarana Grantha</b>, an introductory manual that presents Vedanta with special emphasis on the <b>direct realization (anubhuti)</b> of the highest Truth.',
        'The central teaching is the <b>identity of the individual Self and the Universal Self</b>, realized through Vichara or enquiry alone.',
        'After realization, when ignorance and all its effects disappear, <b>the question of Prarabdha is altogether out of place</b>; the Shruti speaks of it only to explain the apparent behaviour of the realized to the ignorant.',
        'The whole visible and invisible universe is in reality the <b>one eternal Atman, which is Pure Consciousness</b>.',
        'For those without the time for the classical works of Shankarāchārya, this treatise is an <b>invaluable guide in the quest after spiritual truths</b>.',
    ],
    importantConcepts: [
        '<b>Aparoksha:</b> The "nearest of the near", one\'s own Self, known by direct perception rather than inference.',
        '<b>Vichara (Enquiry):</b> "Who am I? How is this world created?" — the sole means to Knowledge.',
        '<b>The Four Qualifications:</b> Vairagya (dispassion), Viveka (discrimination), Shama-Dama (self-control), and Mumukshuta (yearning for liberation).',
        '<b>Adhyasa (Superimposition):</b> The delusion of seeing the body in the Atman, like seeing a snake in a rope.',
        '<b>Prarabdha:</b> The momentum of past actions, which ceases to exist after realization.',
        '<b>The Fifteen Stages (Raja-Yoga):</b> Yama, Niyama, Tyaga, Mauna, Desa, Kala, Asana, Mulabandha, Dehasamya, Drksthiti, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi.',
    ],
    practicalLessons: [
        'Cultivate <b>dispassion (vairagya)</b> toward all objects of enjoyment, treating them with the indifference one has toward the excreta of a crow.',
        'Begin the <b>enquiry (vichara)</b>: "Who am I? How is this world created? Who is its creator?"',
        'Distinguish the <b>Atman from the body</b>, the senses, and the mind, for the Atman is the eternal, unchanging witness.',
        'Meditate constantly on the thought <b>"I am verily Brahman"</b>, identifying all things with the Self.',
        'Practice the <b>fifteen stages</b> of Raja-Yoga to bring the mind to complete absorption in Brahman.',
    ],
    bestQuotes: [
      { text: 'Who am I? How is this world created? Who is its creator? Of what material is this world made? This is the way of that Vichara (enquiry).', cite: 'Aparokshanubhuti' },
      { text: 'Knowledge is not brought about by any other means than Vichara, just as an object is nowhere perceived without the help of light.', cite: 'Aparokshanubhuti' },
      { text: 'I am verily Brahman, being equanimous, quiescent, and by nature absolute Existence, Knowledge, and Bliss.', cite: 'Aparokshanubhuti' },
      { text: 'The whole universe is but Brahman and nothing else, for there exists no other material cause of this phenomenal universe except Brahman.', cite: 'Aparokshanubhuti' },
    ],
    finalTakeaway: 'Aparokshanubhuti, the Direct Experience of the Absolute, is an introductory manual of Advaita Vedanta. Its central theme is the identity of the individual Self and the Universal Self, realized through Vichara or enquiry alone. Shankarāchārya lays down the necessary disciplines, guides the seeker through the enquiry "Who am I?", and culminates in the recognition that all that is visible and invisible is in reality the one eternal Atman, Pure Consciousness itself. After realization, even Prarabdha ceases to exist, and the seeker abides in the supreme Truth.',
    translation: {
      translator: 'Swami Vimuktananda',
      publisher: 'Belur Math, 1938',
      sanskritVerses: [
        'श्रीहरिं परमानन्दमुपदेष्टारमीश्वरम्। व्यापकं सर्वलोकानां कारणं तं नमाम्यहम्।।1।।',
        'अपरोक्षानुभूतिर्वै प्रोच्यते मोक्षसिद्धये। सद्भिरेषा प्रयत्नेन वीक्षणीया मुहुर्मुहुः।।2।।',
        'स्ववर्णाश्रमधर्मेण तपसा हरितोषणात्। साधनं प्रभवेत्पुंसां वैराग्यादिचतुष्टयम्।।3।।',
        'ब्रह्मादिस्थावरान्तेषु वैराग्यं विषयेष्वनु। यथैव काकविष्ठायां वैराग्यं तद्धि निर्मलम्।।4।।',
        'नित्यमात्मस्वरूपं हि दृश्यं तद्विपरीतगम्। एवं यो निश्चयः सम्यग्विवेको वस्तुनः स वै।।5।।',
        'सदैव वासनात्यागः शमोऽयमिति शब्दितः। निग्रहो बाह्यवृत्तीनां दम इत्यभिधीयते।।6।।',
        'विषयेभ्यः परावृत्तिः परमोपरतिर्हि सा। सहनं सर्वदुःखानां तितिक्षा सा शुभा मता।।7।।',
        'निगमाचार्यवाक्येषु भक्तिः श्रद्धेति विश्रुता। चित्तैकाग्र्यं तु सल्लक्ष्ये समाधानमिति स्मृतम्।।8।।',
        'संसारबन्धनिर्मुक्तिः कथं स्यान्मे दयानिधे। इति या सुदृढा बुद्धिर्वक्तव्या सा मुमुक्षुता।।9।।',
        'उक्तसाधनयुक्तेन विचारः पुरुषेण हि। कर्तव्यो ज्ञानसिद्ध्यर्थमात्मनः शुभमिच्छता।।10।।',
        'नोत्पद्यते विना ज्ञानं विचारेणान्यसाधनैः। यथा पदार्थभानं हि प्रकाशेन विना क्वचित्।।11।।',
        'कोऽहं कथमिदं जातं को वा कर्तास्य विद्यते। उपादानं किमस्तीह विचारः सोऽयमीदृशः।।12।।',
        'नाहं भूतगणो देहो नाहं चाक्षगणस्तथा। एतद्विलक्षणः कश्चिद्विचारः सोऽयमीदृशः।।13।।',
        'अज्ञानप्रभवं सर्वं ज्ञानेन प्रविलीयते। संकल्पो विविधः कर्ता विचारः सोऽयमीदृशः।।14।।',
        'एतयोर्यदुपादानमेकं सूक्ष्मं सदव्ययम्। यथैव मृद्धटादीनां विचारः सोऽयमीदृशः।।15।।',
        'अहमेकोऽपि सूक्ष्मश्च ज्ञाता साक्षी सदव्ययः। तदहं नात्र संदेहो विचारः सोऽयमीदृशः।।16।।',
        'आत्मा विनिष्कलो ह्येको देहो बहुभिरावृतः। तयोरैक्यं प्रपश्यन्ति किमज्ञानमतः परम्।।17।।',
        'आत्मा नियामकश्चान्तर्देहो नियम्यबाह्यकः। तयोरैक्यं प्रपश्यन्ति किमज्ञानमतः परम्।।18।।',
        'आत्मा ज्ञानमयः पुण्यो देहो मांसमयोऽशुचिः। तयोरैक्यं प्रपश्यन्ति किमज्ञानमतः परम्।।19।।',
        'आत्मा प्रकाशकः स्वच्छो देहस्तामस उच्यते। तयोरैक्यं प्रपश्यन्ति किमज्ञानमतः परम्।।20।।',
        'आत्मा नित्यो हि सद्रूपो देहोऽनित्यो ह्यसन्मयः। तयोरैक्यं प्रपश्यन्ति किमज्ञानमतः परम्।।21।।',
        'आत्मनस्तत्प्रकाशत्वं यत्पदार्थावभासनम्। नाग्न्यादिदीप्तिवद्दीप्तिर्भवत्यान्ध्यं यतो निशि।।22।।',
        'देहोऽहमित्ययं मूढो मत्वा तिष्ठत्यहो जनः। ममायमित्यपि ज्ञात्वा घटद्रष्टेव सर्वदा।।23।।',
        'ब्रह्मैवाहं समः शान्तः सच्चिदानन्दलक्षणः। नाहं देहो ह्यसद्रूपो ज्ञानमित्युच्यते बुधैः।।24।।',
        'निर्विकारो निराकारो निरवद्योऽहमव्ययः। नाहं देहो ह्यसद्रूपो ज्ञानमित्युच्यते बुधैः।।25।।',
        'निरामयो निराभासो निर्विकल्पोऽहमाततः। नाहं देहो ह्यसद्रूपो ज्ञानमित्युच्यते बुधैः।।26।।',
        'निर्गुणो निष्क्रियो नित्यो नित्यमुक्तोऽहमच्युतः। नाहं देहो ह्यसद्रूपो ज्ञानमित्युच्यते बुधैः।।27।।',
        'निर्मलो निश्चलोऽनन्तः शुद्धोऽहमजरोऽमरः। नाहं देहो ह्यसद्रूपो ज्ञानमित्युच्यते बुधैः।।28।।',
        'स्वदेहं शोभनं त्यक्त्वा पुरुषाख्यं च संमतम्। किं मूर्ख शून्यमात्मानं देहातीतं करोषि भो।।29।।',
        'स्वात्मानं श्रृणु मूर्ख त्वं श्रुत्या युक्त्या च पूरुषम्। देहातीतं सदाकारं सुदुर्दर्शं भवादृशाम्।।30।।',
        'अहंशब्देन विख्यात एक एव स्थितः परः। स्थूलत्वान्नैकतां प्राप्तः कथं स्याद्देहकः पुमान्।।31।।',
        'अहं द्रष्टृतया सिद्धो देहो दृश्यतया स्थितः। ममायमिति निर्देशात्कथं स्याद्देहकः पुमान्।।32।।',
        'अहं विकारहीनस्तु देहो नित्यं विकारवान्। इति प्रतीयते साक्षात्कथं स्याद्देहकः पुमान्।।33।।',
        'यस्मात्परमिति श्रुत्या तया पुरुषलक्षणम्। विनिर्णीतं विशुद्धेन कथं स्याद्देहकः पुमान्।।34।।',
        'सर्वं पुरुष एवेति सूक्ते पुरुषसंज्ञिते। अप्युच्यते यतः श्रुत्या कथं स्याद्देहकः पुमान्।।35।।',
        'असङ्गः पुरुषः प्रोक्तो बृहदारण्यकेऽपि च। अनन्तमलसंसृष्टः कथं स्याद्देहकः पुमान्।।36।।',
        'तत्रैव च समाख्यातः स्वयंज्योतिर्हि पूरुषः। जडः परप्रकाश्योऽयं कथं स्याद्देहकः पुमान्।।37।।',
        'प्रोक्तोऽपि कर्मकाण्डेन ह्यात्मा देहाद्विलक्षणः। नित्यश्च तत्फलं भुङ्क्ते देहपातादनन्तरम्।।38।।',
        'लिङ्गं चानेकसंयुक्तं चलं दृश्यं विकारि च। अव्यापकमसद्रूपं तत्कथं स्यात्पुमानयम्।।39।।',
        'एवं देहद्वयादन्य आत्मा पुरुष ईश्वरः। सर्वात्मा सर्वरूपश्च सर्वातीतोऽहमव्ययः।।40।।',
        'इत्यात्मदेहभानेन प्रपञ्चस्यैव सत्यता। यथोक्ता तर्कशास्त्रेण ततः किं पुरुषार्थता।।41।।',
        'इत्यात्मदेहभेदेन देहात्मत्वं निवारितम्। इदानीं देहभेदस्य ह्यसत्त्वं स्फुटमुच्यते।।42।।',
        'चैतन्यस्यैकरूपत्वाद्भेदो युक्तो न कर्हिचित्। जीवत्वं च मृषा ज्ञेयं रज्ज्वां सर्पग्रहो यथा।।43।।',
        'रज्ज्वज्ञानात्क्षणेनैव यद्वद्रज्जुर्हि सर्पिणी। भाति तद्वच्चितिः साक्षाद्विश्वाकारेण केवला।।44।।',
        'उपादानं प्रपञ्चस्य ब्रह्मणोऽन्यन्न विद्यते। तस्मात्सर्वप्रपञ्चोऽयं ब्रह्मैवास्ति न चेतरत्।।45।।',
        'व्याप्यव्यापकता मिथ्या सर्वमात्मेति शासनात्। इति ज्ञाते परे तत्त्वे भेदस्यावसरः कुतः।।46।।',
        'श्रुत्या निवारितं नूनं नानात्वं स्वमुखेन हि। कथं भासो भवेदन्यः स्थिते चाद्वयकारणे।।47।।',
        'दोषोऽपि विहितः श्रुत्या मृत्योर्मृत्युं स गच्छति। इह पश्यति नानात्वं मायया वञ्चितो नरः।।48।।',
        'ब्रह्मणः सर्वभूतानि जायन्ते परमात्मनः। तस्मादेतानि ब्रह्मैव भवन्तीत्यवधारयेत्।।49।।',
        'ब्रह्मैव सर्वनामानि रूपाणि विविधानि च। कर्माण्यपि समग्राणि बिभर्तीति श्रुतिर्जगौ।।50।।',
        'सुवर्णाज्जायमानस्य सुवर्णत्वं च शाश्वतम्। ब्रह्मणो जायमानस्य ब्रह्मत्वं च तथा भवेत्।।51।।',
        'स्वल्पमप्यन्तरं कृत्वा जीवात्मपरमात्मनोः। योऽवतिष्ठति मूढात्मा भयं तस्याभिभाषितम्।।52।।',
        'यत्राज्ञानाद्भवेद्द्वैतमितरस्तत्र पश्यति। आत्मत्वेन यदा सर्वं नेतरस्तत्र चाण्वपि।।53।।',
        'यस्मिन्सर्वाणि भूतानि ह्यात्मत्वेन विजानतः। न वै तस्य भवेन्मोहो न च शोकोऽद्वितीयतः।।54।।',
        'अयमात्मा हि ब्रह्मैव सर्वात्मकतया स्थितः। इति निर्धारितं श्रुत्या बृहदारण्यसंस्थया।।55।।',
        'अनुभूतोऽप्ययं लोको व्यवहारक्षमोऽपि सन्। असद्रूपो यथा स्वप्न उत्तरक्षणबाधतः।।56।।',
        'स्वप्नो जागरणेऽलीकः स्वप्नेऽपि न हि जागरः। द्वयमेव लये नास्ति लयोऽपि ह्युभयोर्न च।।57।।',
        'त्रयमेवं भवेन्मिथ्या गुणत्रयविनिर्मितम्। अस्य द्रष्टा गुणातीतो नित्यो ह्येकश्चिदात्मकः।।58।।',
        'यद्वन्मृदि घटभ्रान्तिं शुक्तौ वा रजतस्थितिम्। तद्वद्ब्रह्मणि जीवत्वं भ्रान्त्या पश्यति न स्वतः।।59।।',
        'यथा मृदि घटो नाम कनके कुण्डलाभिधा। शुक्तौ हि रजतख्यातिर्जीवशब्दस्तथा परे।।60।।',
        'यथैव व्योम्नि नीलत्वं यथा नीरं मरुस्थले। पुरुषत्वं यथा स्थाणौ तद्वद्विश्वं चिदात्मनि।।61।।',
        'यथैव शून्ये वेतालो गन्धर्वाणां पुरं यथा। यथाकाशे द्विचन्द्रत्वं तद्वत्सत्ये जगत्स्थितिः।।62।।',
        'यथा तरङ्गकल्लोलैर्जलमेव स्फुरत्यलम्। पात्ररूपेण ताम्रं हि ब्रह्माण्डौघैस्तथात्मता।।63।।',
        'घटनाम्ना यथा पृथ्वी पटनाम्ना हि तन्तवः। जगन्नाम्ना चिदाभाति ज्ञेयं तत्तदभावतः।।64।।',
        'सर्वोऽपि व्यवहारस्तु ब्रह्मणा क्रियते जनैः। अज्ञानान्न विजानन्ति मृदेव हि घटादिकम्।।65।।',
        'कार्यकारणता नित्यमास्ते घटमृदोर्यथा। तथैव श्रुतियुक्तिभ्यां प्रपञ्चब्रह्मणोरिह।।66।।',
        'गृह्यमाणे घटे यद्वन्मृत्तिका भाति वै बलात्। वीक्ष्यमाणे प्रपञ्चेऽपि ब्रह्मैवाभाति भासुरम्।।67।।',
        'सदैवात्मा विशुद्धोऽपि ह्यशुद्धो भाति वै सदा। यथैव द्विविधा रज्जुर्ज्ञानिनोऽज्ञानिनोऽनिशम्।।68।।',
        'यथैव मृन्मयः कुम्भस्तद्वद्देहोऽपि चिन्मयः। आत्मानात्मविभागोऽयं मुधैव क्रियते बुधैः।।69।।',
        'सर्पत्वेन यथा रज्जू रजतत्वेन शुक्तिका। विनिर्णीता विमूढेन देहत्वेन तथात्मता।।70।।',
        'घटत्वेन यथा पृथ्वी पटत्वेनैव तन्तवः। विनिर्णीता विमूढेन देहत्वेन तथात्मता।।71।।',
        'कनकं कुण्डलत्वेन तरङ्गत्वेन वै जलम्। विनिर्णीता विमूढेन देहत्वेन तथात्मता।।72।।',
        'पुरुषत्वेन वै स्थाणुर्जलत्वेन मरीचिका। विनिर्णीता विमूढेन देहत्वेन तथात्मता।।73।।',
        'गृहत्वेनैव काष्ठानि खङ्गत्वेनैव लोहता। विनिर्णीता विमूढेन देहत्वेन तथात्मता।।74।।',
        'यथा वृक्षविपर्यासो जलाद्भवति कस्यचित्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।75।।',
        'पोतेन गच्छतः पुंसः सर्वं भातीव चञ्चलम्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।76।।',
        'पीतत्वं हि यथा शुभ्रे दोषाद्भवति कस्यचित्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।77।।',
        'चक्षुर्भ्यां भ्रमशीलाभ्यां सर्वं भाति भ्रमात्मकम्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।78।।',
        'अलातं भ्रमणेनैव वर्तुलं भाति सूर्यवत्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।79।।',
        'महत्त्वे सर्ववस्तूनामणुत्वं ह्यतिदूरतः। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।80।।',
        'सूक्ष्मत्वे सर्ववस्तूनां स्थूलत्वं चोपनेत्रतः। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।81।।',
        'काचभूमौ जलत्वं वा जलभूमौ हि काचता। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।82।।',
        'यद्वदग्नौ मणित्वं हि मणौ वा वह्निता पुमान्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।83।।',
        'अभ्रेषु सत्सु धावत्सु धावन्निव यथा शशी। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।84।।',
        'यथैव दिग्विपर्यासो मोहाद्भवति कस्यचित्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।85।।',
        'यथा शशी जले भाति चञ्चलत्वेन कस्यचित्। तद्वदात्मनि देहत्वं पश्यत्यज्ञानयोगतः।।86।।',
        'एवमात्मनि नज्ञाते देहाध्यासो हि जायते। स एवात्मा परिज्ञातो लीयते च परात्मनि।।87।।',
        'सर्वमात्मतया ज्ञातं जगत्स्थावरजङ्गमम्। अभावात्सर्वभावानां देहानां चात्मता कुतः।।88।।',
        'आत्मानं सततं जानन्कालं नय महामते। प्रारब्धमखिलं भुञ्जन्नोद्वेगं कर्तुमर्हसि।।89।।',
        'उत्पन्नेऽप्यात्मविज्ञाने प्रारब्धं नैव मुञ्चति। इति यच्छ्रूयते शास्त्रात्तन्निराक्रियतेऽधुना।।90।।',
        'तत्त्वज्ञानोदयादूर्ध्वं प्रारब्धं नैव विद्यते। देहादीनामसत्यत्वाद्यथा स्वप्नः प्रबोधतः।।91।।',
        'कर्म जन्मान्तरकृतं प्रारब्धमिति कीर्तितम्। तत्तु जन्मान्तराभावात्पुंसो नैवास्ति कर्हिचित्।।92।।',
        'स्वप्नदेहो यथाध्यस्तस्तथैवायं हि देहकः।। अध्यस्तस्य कुतो जन्म जन्माभावे स्थितिः कुतः।।93।।',
        'उपादानं प्रपञ्चस्य मृद्भाण्डस्येव कथ्यते। अज्ञानं चैव वेदान्तैस्तस्मिन्नष्टे क्व विश्वता।।94।।',
        'यथा रज्जुं परित्यज्य सर्प गृह्णाति वै भ्रमात्। तद्वत्सत्यमविज्ञाय जगत्पश्यति मूढधीः।।95।।',
        'रज्जुरूपे परिज्ञाते सर्पभ्रान्तिर्न तिष्ठति। अधिष्ठाने तथा ज्ञाते प्रपञ्चः शून्यतां व्रजेत्।।96।।',
        'देहस्यापि प्रपञ्चत्वात्प्रारब्धावस्थितिः कुतः। अज्ञानिजनबोधार्थं प्रारब्धं वक्ति वै श्रुतिः।।97।।',
        'क्षीयन्ते चास्य कर्माणि तस्मिन्दृष्टे परावरे। बहुत्वं तन्निषेधार्थं श्रुत्या गीतं च वै स्फुटम्।।98।।',
        'उच्यतेऽज्ञैर्बलाच्चैतत्तदानर्थद्वयागमः। वेदान्तमतहानं च यतो ज्ञानमिति श्रुतिः।।99।।',
        'त्रिपञ्चाङ्गान्यथो वक्ष्ये पूर्वोक्तस्यैव सिद्धये। तैश्च सर्वैः सदा कार्यं निदिध्यासनमेव तु।।100।।',
        'नित्याभ्यासादृते प्राप्तिर्न भवेत्सच्चिदात्मनः। तस्माद्ब्रह्म निदिध्यासेज्जिज्ञासुः श्रेयसे चिरम्।।101।।',
        'यमो हि नियमस्त्यागो मौनं देशश्च कालतः। आसनं मूलबन्धश्च देहसाम्यं च दृक्स्थितिः।।102।।',
        'प्राणसंयमनं चैव प्रत्याहारश्च धारणा। आत्मध्यानं समाधिश्च प्रोक्तान्यङ्गानि वै क्रमात्।।103।।',
        'सर्वं ब्रह्मेति विज्ञानादिन्द्रियग्रामसंयमः। यमोऽयमिति संप्रोक्तोऽभ्यसनीयो मुहुर्मुहुः।।104।।',
        'सजातीयप्रवाहश्च विजातीयतिरस्कृतिः। नियमो हि परानन्दो नियमात्क्रियते बुधैः।।105।।',
        'त्यागः प्रपञ्चरूपस्य चिदात्मत्वावलोकनात्। त्यागो हि महतां पूज्यः सद्यो मोक्षमयो यतः।।106।।',
        'यतो वाचो निवर्तन्ते अप्राप्य मनसा सह। यन्मौनं योगिभिर्गम्यं तद्भजेत्सर्वदा बुधः।।107।।',
        'वाचो यस्मान्निवर्तन्ते तद्वक्तुं केन शक्यते। प्रपञ्चो यदि वक्तव्यः सोऽपि शब्दविवर्जितः।।108।।',
        'इति वा तद्भवेन्मौनं सतां सहजसंज्ञितम्। गिरा मौनं तु बालानां प्रयुक्तं ब्रह्मवादिभिः।।109।।',
        'आदावन्ते च मध्ये च जनो यस्मिन्न विद्यते। येनेदं सततं व्याप्तं स देशो विजनः स्मृतः।।110।।',
        'कलनात्सर्वभूतानां ब्रह्मादीनां निमेषतः। कालशब्देन निर्दिष्टो ह्यखण्डानन्द अद्वयः।।111।।',
        'सुखेनैव भवेद्यस्मिन्नजस्रं ब्रह्मचिन्तनम्। आसनं तद्विजानीयान्नेतरत्सुखनाशनम्।।112।।',
        'सिद्धं यत्सर्वभूतादि विश्वाधिष्ठानमव्ययम्। यस्मिन्सिद्धाः समाविष्टास्तद्वै सिद्धासनं विदुः।।113।।',
        'यन्मूलं सर्वभूतानां यन्मूलं चित्तबन्धनम्। मूलबन्धः सदा सेव्यो योगोऽसौ राजयोगिनाम्।।114।।',
        'अङ्गानां समतां विद्यात्समे ब्रह्मणि लीयते। नो चेन्नैव समानत्वमृजुत्वं शुष्कवृक्षवत्।।115।।',
        'दृष्टिं ज्ञानमयीं कृत्वा पश्येद्ब्रह्ममयं जगत्। सा दृष्टिः परमोदारा न नासाग्रावलोकनी।।116।।',
        'द्रष्टृदर्शनदृश्यानां विरामो यत्र वा भवेत्। दृष्टिस्तत्रैव कर्तव्या न नासाग्रावलोकनी।।117।।',
        'चित्तादिसर्वभावेषु ब्रह्मत्वेनैव भावनात्। निरोधः सर्ववृत्तीनां प्राणायामः स उच्यते।।118।।',
        'निषेधनं प्रपञ्चस्य रेचकाख्यः समीरणः। ब्रह्मैवास्मीति या वृत्तिः पूरको वायुरीरितः।।119।।',
        'ततस्तद्वृत्तिनैश्चल्यं कुम्भकः प्राणसंयमः। अयं चापि प्रबुद्धानामज्ञानां घ्राणपीडनम्।।120।।',
        'विषयेष्वात्मतां दृष्ट्वा मनसश्चिति मज्जनम्। प्रत्याहारः स विज्ञेयोऽभ्यसनीयो मुमुक्षुभिः।।121।।',
        'यत्र यत्र मनो याति ब्रह्मणस्तत्र दर्शनात्। मनसो धारणायैव धारणा सा परा मता।।122।।',
        'ब्रह्मैवास्मीति सद्वृत्त्या निरालम्बतया स्थितिः। ध्यानशब्देन विख्याता परमानन्ददायिनी।।123।।',
        'निर्विकारतया वृत्त्या ब्रह्माकारतया पुनः। वृत्तिविस्मरणं सम्यक्समाधिर्ज्ञानसंज्ञकः।।124।।',
        'एवं चाकृत्रिमानन्दं तावत्साधु समभ्यसेत्। वश्यो यावत्क्षणात्पुंसः प्रयुक्तः स भेवत्स्वयम्।।125।।',
        'ततः साधननिर्मुक्तः सिद्धो भवति योगिराट्। तत्स्वरूपं न चैकस्य विषयो मनसो गिराम्।।126।।',
        'समाधौ क्रियमाणे तु विघ्ना आयान्ति वै बलात्। अनुसंधानराहित्यमालस्यं भोगलालसम्।।127।।',
        'लयस्तमश्च विक्षेपो रसास्वादश्च शून्यता। एवं यद्विघ्नबाहुल्यं त्याज्यं ब्रह्मविदा शनैः।।128।।',
        'भाववृत्त्या हि भावत्वं शून्यवृत्त्या हि शून्यता। ब्रह्मवृत्त्या हि पूर्णत्वं तथा पूर्णत्वमभ्यसेत्।।129।।',
        'ये हि वृत्तिं जहत्येनां ब्रह्माख्यां पावनीं पराम्। वृथैव ते तु जीवन्ति पशुभिश्च समा नराः।।130।।',
        'ये हि वृत्तिं विजानन्ति ये ज्ञात्वा वर्धयन्त्यपि। ते वै सत्पुरुषा धन्या वन्द्यास्ते भुवनत्रये।।131।।',
        'येषां वृत्तिः समावृद्धा परिपक्वा च सा पुनः। ते वै सद्ब्रह्मतां प्राप्ता नेतरे शब्दवादिनः।।132।।',
        'कुशला ब्रह्मवार्तायां वृत्तिहीनाः सुरागिणः। तेऽप्यज्ञानितमा नूनं पुनरायान्ति यान्ति च।।133।।',
        'निमेषार्धं न तिष्ठन्ति वृत्तिं ब्रह्ममयीं विना। यथा तिष्ठन्ति ब्रह्माद्याः सनकाद्याः शुकादयः।।134।।',
        'कार्ये कारणतायाता कारणे न हि कार्यता। कारणत्वं स्वतो गच्छेत्कार्याभावे विचारतः।।135।।',
        'अथ शुद्धं भवेद्वस्तु यद्वै वाचामगोचरः। द्रष्टव्यं मृद्धटेनैव दृष्टान्तेन पुनः पुनः।।136।।',
        'अनेनैव प्रकारेण वृत्तिर्ब्रह्मात्मिका भवेत्। उदेति शुद्धचित्तानां वृत्तिज्ञानं ततः परम्।।137।।',
        'कारणं व्यतिरेकेण पुमानादौ विलोकयेत्। अन्वयेन पुनस्तद्धि कार्ये नित्यं प्रपश्यति।।138।।',
        'कार्ये हि कारणं पश्येत्पश्चात्कार्यं विसर्जयेत्। कारणत्वं स्वतो नश्येदवशिष्टं भवेन्मुनिः।।139।।',
        'भावितं तीव्रवेगेण वस्तु यन्निश्चयात्मना। पुमांस्तद्धि भवेच्छीघ्रं ज्ञेयं भ्रमरकीटवत्।।140।।',
        'अदृश्यं भावरूपं च सर्वमेतच्चिदात्मकम्। सावधानतया नित्यं स्वात्मानं भावयेद्बुधः।।141।।',
        'दृश्यं ह्यदृश्यतां नीत्वा ब्रह्माकारेण चिन्तयेत्। विद्वान्नित्यसुखे तिष्ठेद्धिया चिद्रसपूर्णया।।142।।',
        'एभिरङ्गैः समायुक्तो राजयोग उदाहृतः। किंचित्पक्वकषायाणां हठयोगेन संयुतः।।143।।',
        'परिपक्वं मनो येषां केवलोऽयं च सिद्धिदः। गुरुदैवतभक्तानां सर्वेषां सुलभो जवात्।।144।।',
      ],
      verses: [
        'I bow down to Him, to Sri Hari (the destroyer of ignorance), the Supreme Bliss, the First Teacher, Ishwara, the All-pervading One and the Cause of all Lokas (the universe).',
        'Herein is expounded (the means of attaining to) Aparokshanubhuti (Self-Realization) for the acquisition of final liberation. Only the pure in heart should constantly and with all effort meditate upon the truth herein taught.',
        'The four preliminary qualifications (the means to the attainment of knowledge), such as Vairagya (dispassion) and the like, are acquired by men by propitiating Hari (the Lord), through austerities and the performance of duties pertaining to their social order and stage in life.',
        'The indifference with which one treats the excreta of a crow, such an indifference to all objects of enjoyment from the realm of Brahma to this world (in view of their perishable nature), is verily called pure Vairagya.',
        'Atman (the seer) in itself is alone permanent, the seen is opposed to it (i.e., transient), such a settled conviction is truly known as discrimination.',
        'Abandonment of desires at all times is called Shama and restraint of the external functions of the organs is called Dama.',
        'Turning away completely from all sense-objects is the height of Uparati, and patient endurance of all sorrow or pain is known as Titiksha which is conducive to happiness.',
        'Implicit faith in the words of the Vedas and the teachers (who interpret them) is known as Shraddha, and concentration of the mind on the only object Sat (i.e., Brahman) is regarded as Samadhana.',
        'When and how shall I, O Lord, be free from the bonds of this world (i.e., births and deaths), such a burning desire is called Mumukshuta.',
        'Only that person who is in possession of the said qualification (as means to Knowledge) should constantly reflect with a view to attaining Knowledge, desiring his own good.',
        'Knowledge is not brought about by any other means than Vichara, just as an object is nowhere perceived (seen) without the help of light.',
        'Who am I? How is this (world) created? Who is its creator? Of what material is this (world) made? This is the way of that Vichara (enquiry).',
        'I am neither the body, a combination of the (five) elements (of matter), nor am I an aggregate of the senses; I am something different from these. This is the way of that Vichara.',
        'Everything is produced by ignorance, and dissolves in the wake of Knowledge. The various thoughts (modifications of Antahkarana) must be the creator. Such is this Vichara.',
        'The material (cause) of these two (i.e., ignorance and thought) is the One (without a second), subtle (not apprehended by the senses) and unchanging Sat (Existence), just as the earth is the material (cause) of the pot and the like. This is the way of that Vichara.',
        'As I am also the One, the Subtle, the Knower, the Witness, the Ever-Existent, and the Unchanging, so there is no doubt that I am "That" (i.e., Brahman). Such is this enquiry.',
        'Atman is verily one and without parts, whereas the body consists of many parts; and yet the people see (confound) these two as one! What else can be called ignorance but this?',
        'Atman is the ruler of the body and is internal, the body is the ruled and is external; and yet, etc.',
        'Atman is all consciousness and holy, the body is all flesh and impure; and yet, etc.',
        'Atman is the (supreme) Illuminator and purity itself; the body is said to be of the nature of darkness; and yet, etc.',
        'Atman is eternal, since it is Existence itself; the body is transient, as it is non-existence in essence; and yet etc.',
        'The luminosity of Atman consists in the manifestation of all objects. Its luminosity is not like that of fire or any such thing, for (in spite of the presence of such lights) darkness prevails at night (at some place or other).',
        'How strange is it that a person ignorantly rests contented with the idea that he is the body, while he knows it as something belonging to him (and therefore apart from him) even as a person who sees a pot (knows it as apart from him)!',
        'I am verily Brahman, being equanimous, quiescent, and by nature absolute Existence, Knowledge, and Bliss. I am not the body which is non-existence itself. This is called true Knowledge by the wise.',
        'I am without any change, without any form, free from all blemish and decay. I am not, etc.',
        'I am not subjected to any disease, I am beyond all comprehension, free from all alternatives and all-pervading. I am not, etc.',
        'I am without any attribute or activity, I am eternal, ever free, and imperishable. I am not, etc.',
        'I am free from all impurity, I am immovable, unlimited, holy, undecaying, and immortal. I am not, etc.',
        'O you ignorant one! Why do you assert the blissful, ever-existent Atman, which resides in your own body and is (evidently) different from it, which is known as Purusha and is established (by the Shruti as identical with Brahman), to be absolutely non-existent?',
        'O you ignorant one! Try to know, with the help of Shruti and reasoning, your own Self, Purusha, which is different from the body, (not a void but) the very form of existence, and very difficult for persons like you to realize.',
        'The Supreme (Purusha) known as "I" (ego) is but one, whereas the gross bodies are many. So how can this body be Purusha?',
        '"I" (ego) is well established as the subject of perception whereas the body is the object. This is learnt from the fact that when we speak of the body we say, "This is mine." So how can this body be Purusha?',
        'It is a fact of direct experience that the "I" (Atman) is without any change, whereas the body is always undergoing changes. So how can this body be Purusha?',
        'Wise men have ascertained the (real) nature of Purusha from that Shruti text, "(There is nothing) higher than He (Purusha)," etc. So how can this body be Purusha?',
        'Again the Shruti has declared in the Purusha Sukta that "All this is verily the Purusha". So how can this body be Purusha?',
        'So also it is said in Brihadaranyaka that "The Purusha is completely unattached". How can this body wherein inhere innumerable impurities be the Purusha?',
        'There again it is clearly stated that "the Purusha is self-illumined". So how can the body which is inert (insentient) and illumined by an external agent be the Purusha?',
        'Moreover, the Karma-kanda also declares that the Atman is different from the body and permanent, as it endures even after the fall of the body and reaps the fruits of actions (done in this life).',
        'Even the subtle body consists of many parts and is unstable. It is also an object of perception, is changeable, limited and non-existent by nature. So how can this be the Purusha?',
        'The immutable Atman, the substratum of the ego, is thus different from these two bodies, and is the Purusha, the Ishwara (the Lord of all), the Self of all; It is present in every form and yet transcends them all.',
        'Thus the enunciation of the difference between the Atman and the body has (indirectly) asserted, indeed, after the manner of the Tarkashastra, the reality of the phenomenal world. But what end of human life is served thereby?',
        'Thus the view that the body is the Atman has been denounced by the enunciation of the difference between the Atman and the body. Now is clearly stated the unreality of the difference between the two.',
        'No division in Consciousness is admissible at any time as it is always one and the same. Even the individuality of the Jiva must be known as false, like the delusion of a snake in a rope.',
        'As through the ignorance of the real nature of the rope the very rope appears in an instant as a snake, so also does pure Consciousness appear in the form of the phenomenal universe without undergoing any change.',
        'There exists no other material cause of this phenomenal universe except Brahman. Hence this whole universe is but Brahman and nothing else.',
        'From such declaration (of the Shruti) as "All this is Atman", it follows that the idea of the pervaded and the pervading is illusory. This supreme truth being realized, where is the room for any distinction between the cause and the effect?',
        'Certainly the Shruti has directly denied manifoldness in Brahman. The non-dual cause being an established fact, how could the phenomenal universe be different from It?',
        'Moreover, the Shruti has condemned (the belief in variety) in the words, "The person who", being deceived by Maya, "sees variety in this (Brahman), goes from death to death".',
        'Inasmuch as all beings are born of Brahman, the supreme Atman, they must be understood to be verily Brahman.',
        'The Shruti has clearly declared that Brahman alone is the substratum of all varieties of names, forms and actions.',
        'Just as a thing made of gold ever has the nature of gold, so also a being born of Brahman has always the nature of Brahman.',
        'Fear is attributed to the ignorant one who rests after making even the slightest distinction between the Jivatman and the Paramatman.',
        'When duality appears through ignorance, one sees another; but when everything becomes identified with the Atman, one does not perceive another even in the least.',
        'In that state when one realizes all as identified with the Atman, there arises neither delusion nor sorrow, in consequence of the absence of duality.',
        'The Shruti in the form of the Brihadaranyaka has declared that this Atman, which is the Self of all, is verily Brahman.',
        'This world, though an object of our daily experience and serving all practical purposes, is, like the dream world, of the nature of non-existence, inasmuch as it is contradicted the next moment.',
        'The dream (experience) is unreal in waking, whereas the waking (experience) is absent in dream. Both, however, are non-existent in deep sleep which, again, is not experienced in either.',
        'Thus all the three states are unreal inasmuch as they are the creation of the three Gunas; but their witness (the reality behind them) is, beyond all Gunas, eternal, one, and is Consciousness itself.',
        'Just as (after the illusion has gone) one is no more deluded to see a jar in earth or silver in the nacre, so does one no more see Jiva in Brahman when the latter is realized (as one\'s own self).',
        'Just as earth is described as a jar, gold as an ear-ring, and a nacre as silver, so is Brahman described as Jiva.',
        'Just as blueness in the sky, water in the mirage, and a human figure in a post (are but illusory), so is the universe in Atman.',
        'Just as the appearance of a ghost in an empty place, of a castle in the air, and of a second moon in the sky (is illusory), so is the appearance of the universe in Brahman.',
        'Just as it is water that appears as ripples and waves, or again it is copper, that appears in the form of vessel, so it is Atman that appears as the whole universe.',
        'Just as it is earth that appears under the name of a jar, or it is threads that appear under the name of a cloth, so it is Atman that appears under the name of the universe. This Atman is to be known by negating the names.',
        'People perform all their actions in and through Brahman, (but on account of ignorance they are not aware of that), just as through ignorance persons do not know that jars and other earthenwares are nothing but earth.',
        'Just as there ever exist the relation of cause and effect between earth and a jar, so does the same relation exist between Brahman and the phenomenal world; this has been established here on the strength of scriptural texts and reasoning.',
        'Just as (the consciousness of) earth forces itself upon our mind while thinking of a jar, so also does (the idea of) ever-shining Brahman flash on us while contemplating on the phenomenal world.',
        'Atman, though ever pure (to a wise man), always appears to be impure (to an ignorant one), just as a rope always appears in two different ways to a knowing person and an ignorant one.',
        'Just as a jar is all earth, so also is the body all consciousness. The division, therefore, into the Self and non-Self is made by the ignorant to no purpose.',
        'Just as a rope is imagined to be a snake and a nacre to be a piece of silver, so is the Atman determined to be the body by an ignorant person.',
        'Just as earth is thought of as a jar (made of it) and threads as a cloth, so is Atman, etc.',
        'Just as gold is thought of as an ear-ring and water as waves, so is the Atman, etc.',
        'Just as the stump of a tree is mistaken for a human figure and a mirage for water, so is the Atman, etc.',
        'Just as a mass of wood work is thought of as a house and iron as a sword, so is the Atman, etc.',
        'Just as one sees the illusion of a tree on account of water, so does a person on account of ignorance see Atman as the body.',
        'Just as to a person going in a boat everything appears to be in motion, so does one, etc.',
        'Just as to a person suffering from a defect (jaundice) white things appear as yellow, so does one, etc.',
        'Just as to a person with defective eyes everything appears to be defective, so does one, etc.',
        'Just as a firebrand, through mere rotation, appears circular like the sun, so does one, etc.',
        'Just as all things that are really large appear to be very small owing to great distance, so does one, etc.',
        'Just as all objects that are very small appear to be large when viewed through lenses, so does one, etc.',
        'Just as a surface of glass is mistaken for water, or vice versa, so does one, etc.',
        'Just as a person imagines a jewel in fire or vice versa, so does one, etc.',
        'Just as when clouds move, the moon appears to be in motion, so does one, etc.',
        'Just as a person through confusion loses all distinction between the different points of the compass, so does one, etc.',
        'Just as the moon (when reflected) in water appears to one as unsteady, so does one, etc.',
        'Thus through ignorance arises in Atman the delusion of the body, which, again, through Self-realization, disappears in the supreme Atman.',
        'When the whole universe, movable and immovable, is known to be Atman, and thus the existence of everything else is negated, where is then any room to say that the body is Atman?',
        'O enlightened one, pass your time always contemplating on Atman while you are experiencing all the results of Prarabdha; for it ill becomes you to feel distressed.',
        'The theory one hears of from the scripture, that Prarabdha does not lose its hold upon one even after the origination of the knowledge of Atman, is now being refuted.',
        'After the origination of the knowledge of Reality, Prarabdha verily ceases to exist, inasmuch as the body and the like become non-existent; just as a dream does not exist on waking.',
        'That Karma which is done in a previous life is known as Prarabdha (which produces the present life). But such Karma cannot take the place of Prarabdha (for a man of knowledge), as he has no other birth (being free from ego).',
        'Just as the body in a dream is superimposed (and therefore illusory), so is also this body. How could there be any birth of the superimposed (body), and in the absence of birth (of the body) where is the room for that (i.e., Prarabdha) at all?',
        'The Vedanta texts declare ignorance to be verily the material (cause) of the phenomenal world just as earth is of a jar. That (ignorance) being destroyed, where can the universe subsist?',
        'Just as a person out of confusion perceives only the snake leaving aside the rope, so does an ignorant person see only the phenomenal world without knowing the reality.',
        'The real nature of the rope being known, the appearance of the snake no longer persists; so the substratum being known, the phenomenal world disappears completely.',
        'The body also being within the phenomenal world (and therefore unreal), how could Prarabdha exist? It is, therefore, for the understanding of the ignorant alone that the Shruti speaks of Prarabdha.',
        '"And all the actions of a man perish when he realizes that (Atman) which is both the higher and the lower". Here the clear use of the plural by the Shruti is to negate Prarabdha as well.',
        'If the ignorant still arbitrarily maintain this, they will not only involve themselves into two absurdities but will also run the risk of forgoing the Vedantic conclusion. So one should accept those Shrutis alone from which proceeds true knowledge.',
        'Now, for the attainment of the aforesaid (knowledge), I shall expound the fifteen steps by the help of which one should practice profound meditation at all times.',
        'The Atman that is absolute existence and knowledge cannot be realized without constant practice. So one seeking after knowledge should long meditate upon Brahman for the attainment of the desired goal.',
        'The steps, in order, are described as follows: the control of the senses, the control of the mind, renunciation, silence, space, time, posture, the restraining root (Mulabandha), the equipoise of the body, the firmness of vision, the control of the vital forces, the withdrawal of the mind, concentration, self-contemplation and complete absorption.',
        'The steps, in order, are described as follows: the control of the senses, the control of the mind, renunciation, silence, space, time, posture, the restraining root (Mulabandha), the equipoise of the body, the firmness of vision, the control of the vital forces, the withdrawal of the mind, concentration, self-contemplation and complete absorption.',
        'The restraint of all the senses by means of such knowledge as "All this is Brahman" is rightly called Yama, which should be practiced again and again.',
        'The continuous flow of only one kind of thought to the exclusion of all other thoughts, is called Niyama, which is verily the supreme bliss and is regularly practiced by the wise.',
        'The abandonment of the illusory universe by realizing it as the all-conscious Atman is the real renunciation honored by the great, since it is of the nature of immediate liberation.',
        'The wise should always be one with that silence wherefrom words together with the mind turn back without reaching it, but which is attainable by the Yogins.',
        'Who can describe That (i.e., Brahman) whence words turn away? (So silence is inevitable while describing Brahman). Or if the phenomenal world were to be described, even that is beyond words. This, to give an alternate definition, may also be termed silence known among the sages as congenital. The observance of silence by restraining speech, on the other hand, is ordained by the teachers of Brahman for the ignorant.',
        'Who can describe That (i.e., Brahman) whence words turn away? (So silence is inevitable while describing Brahman). Or if the phenomenal world were to be described, even that is beyond words. This, to give an alternate definition, may also be termed silence known among the sages as congenital. The observance of silence by restraining speech, on the other hand, is ordained by the teachers of Brahman for the ignorant.',
        'That solitude is known as space, wherein the universe does not exist in the beginning, end or middle, but whereby it is pervaded at all times.',
        'The non-dual (Brahman) that is bliss indivisible is denoted by the word \'time\', since it brings into existence, in the twinkling of an eye all beings from Brahman downwards.',
        'One should known that as real posture in which the meditation on Brahman flows spontaneously and unceasingly, and not any other that destroys one\'s happiness.',
        'That which is well known as the origin of all beings and the support of the whole universe, which is immutable and in which the enlightened are completely merged, that alone is known as Siddhasana (eternal Brahman).',
        'That (Brahman) which is the root of all existence and on which the restraint of the mind is based is called the restraining root (Mulabandha) which should always be adopted since it is fit for Raja-yogins.',
        'Absorption in the uniform Brahman should be known as the equipoise of the limbs (Dehasamya). Otherwise mere straightening of the body like that of a dried-up tree is no equipoise.',
        'Converting the ordinary vision into one of knowledge one should view the world as Brahman itself. That is the noblest vision, and not that which is directed to the tip of the nose.',
        'Or, one should direct one\'s vision to That alone where all distinction of the seer, sight, and the seen ceases and not to the tip of the nose.',
        'The restraint of all modifications of the mind by regarding all mental states like the Chitta as Brahman alone, is called Pranayama.',
        'The negation of the phenomenal world is known as Rechaka (breathing out), the thought, "I am verily Brahman", is called Puraka (breathing in), and the steadiness of that thought thereafter is called Kumbhaka (restraining the breath). This is the real course of Pranayama for the enlightened, whereas the ignorant only torture the nose.',
        'The negation of the phenomenal world is known as Rechaka (breathing out), the thought, "I am verily Brahman", is called Puraka (breathing in), and the steadiness of that thought thereafter is called Kumbhaka (restraining the breath). This is the real course of Pranayama for the enlightened, whereas the ignorant only torture the nose.',
        'The absorption of the mind in the Supreme Consciousness by realizing Atman in all objects is known as Pratyahara (withdrawal of the mind) which should be practiced by the seekers after liberation.',
        'The steadiness of the mind through realization of Brahman wherever the mind goes, is known as the supreme Dharana (concentration).',
        'Remaining independent of everything as a result of the unassailable thought, "I am verily Brahman", is well known by the word Dhyana (meditation), and is productive of supreme bliss.',
        'The complete forgetfulness of all thought by first making it changeless and then identifying it with Brahman is called Samadhi known also as knowledge.',
        'The aspirant should carefully practice this (meditation) that reveals his natural bliss until, being under his full control, it arises spontaneously, in an instant when called into action.',
        'Then he, the best among Yogis having attained to perfection, becomes free from all practices. The real nature of such a man never becomes an object of the mind or speech.',
        'While practicing Samadhi there appear unavoidably many obstacles, such as lack of inquiry, idleness, desire for sense-pleasure, sleep, dullness, distraction, tasting of joy, and the sense of blankness. One desiring the knowledge of Brahman should slowly get rid of such innumerable obstacles.',
        'While practicing Samadhi there appear unavoidably many obstacles, such as lack of inquiry, idleness, desire for sense-pleasure, sleep, dullness, distraction, tasting of joy, and the sense of blankness. One desiring the knowledge of Brahman should slowly get rid of such innumerable obstacles.',
        'While thinking of an object the mind verily identifies itself with that, and while thinking of a void it really becomes blank, whereas by the thought of Brahman it attains to perfection. So one should constantly think of (Brahman to attain) perfection.',
        'Those who give up this supremely purifying thought of Brahman, live in vain and are on the same level with beasts.',
        'Blessed indeed are those virtuous persons who at first have this consciousness of Brahman and then develop it more and more. They are respected everywhere.',
        'Only those in whom this consciousness (of Brahman) being ever present grows into maturity, attain to the state of ever-existent Brahman; and not others who merely deal with words.',
        'Also those persons who are only clever in discussing about Brahman but have no realization, and are very much attached to worldly pleasures, are born and die again and again in consequence of their ignorance.',
        'The aspirants after Brahman should not remain a single moment without the thought of Brahman, just like Brahma, Sanaka, Suka and others.',
        'The nature of the cause inheres in the effect and not vice versa; so through reasoning it is found that in the absence of the effect, the cause, as such also disappears.',
        'Then that pure reality (Brahman) which is beyond speech alone remains. This should be understood again and again verily through the illustration of earth and the pot.',
        'In this way alone there arises in the pure-minded a state of awareness (of Brahman), which is afterwards merged into Brahman.',
        'One should first look for the cause by the negative method and then find it by the positive method, as ever inherent in the effect.',
        'One should verily see the cause in the effect, and then dismiss the effect altogether. What then remains, the sage himself becomes.',
        'A person who meditates upon a thing with great assiduity and firm conviction, becomes that very thing. This may be understood from the illustration of the wasp and the worm.',
        'The wise should always think with great care of the invisible, the visible, and everything else, as his own Self which is consciousness itself.',
        'Having reduced the visible to the invisible, the wise should think of the universe as one with Brahman. Thus alone will he abide in eternal felicity with mind full of consciousness and bliss.',
        'Thus has been described Raja-Yoga consisting of these steps (mentioned above). With this is to be combined Hatha-Yoga for (the benefit of) those whose worldly desires are partially attenuated.',
        'For those whose mind is completely purified this (Raja-Yoga) alone is productive of perfection. Purity of the mind, again, is speedily accessible to those who are devoted to the teacher and the Deity.',
      ]
    }
  },
  {
    id: 'svarupanusandhanashtakam',
    title: 'Svarupanusandhanashtakam',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    year: 800,
    rating: 4.8,
    summary: 'Eight Verses for Continuous Inquiry into One\'s True Nature, a meditation text that points directly to the recognition of what one truly is.',
    keyIdeas: [
      'The <b>Svarupanusandhanashtakam</b> ("Eight Verses for Continuous Inquiry into One\'s True Nature") is a meditation text meant to be <b>practised, not just read</b>.',
      'The title is the instruction: <b>svarupa</b> means one\'s own true nature, <b>anusandhana</b> means continuous inquiry or remembrance, and <b>ashtakam</b> means eight verses.',
      'Each verse describes the Self in the language of <b>pure awareness</b>, unborn, without beginning or end, free from the three states, untouched by the body and senses.',
      'The language is <b>direct and declarative</b>, pointing at a living recognition rather than proving a philosophical point.',
      'The verses serve as <b>prompts</b> for the recognition of the Self to be fresh and immediate, not merely remembered from a past experience.',
      'It is one of Shankarāchārya\'s <b>shorter and less well known</b> compositions, but highly regarded for its quality of presence and suitability for daily recitation.',
    ],
    mainTakeaways: [
      'The text is meant to be <b>practised</b>, each verse is a reminder to return, again and again, to the recognition of what one truly is.',
      'The Self is described as <b>pure awareness</b>, unborn, free from the three states, untouched by the body, senses, time, or change.',
      'Shankarāchārya is <b>pointing at a living recognition</b>, not arguing a philosophical position.',
      'Regular recitation <b>cuts through mental noise</b> and re-establishes the sense of one\'s own natural peace.',
    ],
    importantConcepts: [
      '<b>Svarupa:</b> One\'s own nature or true form, the subject of continuous inquiry.',
      '<b>Anusandhana:</b> Continuous inquiry or remembrance, the practice the verses support.',
      '<b>Turiya:</b> The Fourth, the state beyond waking, dream, and deep sleep.',
      '<b>Neti Neti:</b> "Not this, not this", the method of negation that reveals the Full.',
      '<b>Aham Brahmasmi:</b> "I am Brahman", the mental modification through which the Self is attained.',
      '<b>Phalashruti:</b> The closing verse declaring the fruit of reciting the hymn.',
    ],
    practicalLessons: [
      'Recite the verses <b>daily with reverence</b> as a practice of inquiry into your true nature.',
      'Return <b>again and again</b> to the recognition of what you truly are, beyond body and mind.',
      'Use the <b>rhythm and directness</b> of the language to cut through mental noise.',
      'Meditate on the Self as <b>pure awareness</b>, free from the three states of waking, dream, and deep sleep.',
    ],
    bestQuotes: [
      { text: 'That supreme, eternal Brahman which one attains, having renounced all, that very Brahman I myself am.', cite: 'Svarupanusandhanashtakam' },
      { text: 'That whose nature is bliss, whose very essence is pure luminous consciousness, the Fourth (Turiya) beyond the three states, that alone I am.', cite: 'Svarupanusandhanashtakam' },
      { text: 'That which is infinite, all-pervading, free from distinctions, formless, supremely radiant, and free from death, that eternal supreme Brahman alone am I.', cite: 'Svarupanusandhanashtakam' },
      { text: 'That devout person who recites this hymn with reverence shall become Vishnu himself in this very world.', cite: 'Svarupanusandhanashtakam' },
    ],
    finalTakeaway: 'Svarupanusandhanashtakam is a meditation text meant to be practised. In eight verses, Shankarāchārya points directly to the Self as pure awareness: unborn, free from the three states, untouched by time or change. The direct, declarative language serves as a prompt for the living recognition of one\'s true nature. Regular recitation cuts through mental noise and re-establishes one\'s natural peace.',
    translation: {
      translator: 'Swami Chinmayananda',
      publisher: 'Chinmaya Mission, Mumbai',
      sanskritVerses: [
        'तपोयज्ञदानादिभिः शुद्धबुद्धि-र्विरक्तो नृपादेः पदे तुच्छबुद्ध्या । परित्यज्य सर्वं यदाप्नोति तत्त्वं परं ब्रह्म नित्यं तदेवाहमस्मि ॥ १॥',
        'दयालुं गुरुं ब्रह्मनिष्ठं प्रशान्तं समाराध्य मत्या विचार्य स्वरूपम् । यदाप्नोति तत्त्वं निदिध्यास विद्वान्-परं ब्रह्म नित्यं तदेवाहमस्मि ॥ २॥',
        'यदानन्दरूपं प्रकाशस्वरूपं निरस्तप्रपञ्चं परिच्छेदहीनम् । अहम्ब्रह्मवृत्त्यैकगम्यं तुरीयं परं ब्रह्म नित्यं तदेवाहमस्मि ॥ ३॥',
        'यदज्ञानतो भाति विश्वं समस्तं विनष्टं च सद्यो यदात्मप्रबोधे । मनोवागतीतं विशुद्धं विमुक्तं परं ब्रह्म नित्यं तदेवाहमस्मि ॥ ४॥',
        'निषेधे कृते नेति नेतीति वाक्यैः समाधिस्थितानां यदाभाति पूर्णम् । अवस्थात्रयातीतमद्वैतमेकं परं ब्रह्म नित्यं तदेवाहमस्मि ॥ ५॥',
        'यदानन्दलेशैः समानन्दि विश्वं यदाभाति सत्त्वे तदाभाति सर्वम् । यदालोकने रूपमन्यत्समस्तं परं ब्रह्म नित्यं तदेवाहमस्मि ॥ ६॥',
        'अनन्तं विभुं निर्विकल्पं निरीहं शिवं सङ्गहीनं यदोङ्कारगम्यम् । निराकारमत्युज्ज्वलं मृत्युहीनं परं ब्रह्म नित्यं तदेवाहमस्मि ॥ ७॥',
        'यदानन्द सिन्धौ निमग्नः पुमान्स्या-दविद्याविलासः समस्तप्रपञ्चः । तदा नः स्फुरत्यद्भुतं यन्निमित्तं परं ब्रह्म नित्यं तदेवाहमस्मि ॥ ८॥',
        'स्वरूपानुसन्धानरूपां स्तुतिं यः पठेदादराद्भक्तिभावो मनुष्यः । श्रुणोतीह वा नित्यमुद्युक्तचित्तो भवेद्विष्णुरत्रैव वेदप्रमाणात् ॥ ९॥',
      ],
      verses: [
        'That supreme, eternal Brahman which one attains, one whose intellect has been purified through austerity, sacrifice, charity and the like, who is dispassionate, regarding the rank of kings and the rest as trifling, and who, renouncing all, reaches that Truth, that very Brahman I myself am.',
        'Having worshipped with devotion the compassionate Guru, one established in Brahman and utterly serene, and having inquired into one\'s own true nature with the intellect, the wise one, meditating deeply, attains that Reality: the supreme, eternal Brahman. That very One I am.',
        'That whose nature is bliss, whose very essence is pure luminous consciousness, in which all the manifold universe is dissolved, which is utterly free of all limitation and division, attainable solely through the mental modification "I am Brahman", the Fourth (Turiya) that lies beyond the three states, the supreme, eternal Brahman, that alone I am.',
        'That through ignorance of which the entire universe appears, and which is instantly dissolved upon the awakening to the Self; that which is beyond mind and speech, utterly pure, perfectly free, that eternal supreme Brahman, that alone am I.',
        'When all negation has been completed through the sayings "not this, not this" (neti neti), that which then shines forth as the Full to those established in samadhi, beyond the three states, non-dual, one, the supreme eternal Brahman, that alone I am.',
        'That by whose mere fragments of bliss the whole universe rejoices; that by whose shining alone, in existence itself, all things shine forth; in whose sight every other form is beheld, that eternal supreme Brahman, that very One I am.',
        'That which is infinite, all-pervading, free from distinctions, and desireless; the auspicious one, unattached, which is reached through the syllable Om; formless, supremely radiant, and free from death, that eternal supreme Brahman alone am I.',
        'When a person becomes wholly immersed in the ocean of bliss, then the entire manifest universe, that mere play of ignorance, dissolves for us. That wondrous reality on account of which all this shines forth, the eternal supreme Brahman, verily That am I.',
        'That devout person who recites this hymn, which takes the form of an inquiry into one\'s own true nature, with reverence, or who listens to it here daily with an eager and attentive mind, shall become Vishnu himself in this very world, on the authority of the Vedas.',
      ]
    }
  },
  {
    id: 'sadhana-panchakam',
    title: 'Sadhana Panchakam',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    year: 800,
    rating: 4.8,
    summary: 'Five Verses on Spiritual Practice, a compact step-by-step guide to the complete Vedantic path, from the very beginning of spiritual life to liberation.',
    keyIdeas: [
      'The <b>Sadhana Panchakam</b> ("Five Verses on Spiritual Practice") is a compact guide to the complete spiritual path by Adi Shankarāchārya, covering the whole path in just five verses.',
      'Each verse (of eight lines) lays out a <b>step-by-step programme</b> for the seeker, from the very beginning of spiritual life all the way to liberation.',
      'The text begins with <b>foundational steps</b>: study the Vedas, perform your duties, offer the results to God, keep the company of the wise, and develop dispassion.',
      'It moves to <b>deeper inner work</b>: control of the senses and mind, contemplation of the Self, and gradual withdrawal from identifying with the body and ego.',
      'The fifth verse points to the <b>recognition of one\'s true nature</b> and the peace that comes from abiding in that recognition.',
      'It is a <b>complete map of the Vedantic path in miniature</b>, valued by both beginners and experienced practitioners.',
    ],
    mainTakeaways: [
      'Sadhana Panchakam is a <b>complete map of the Vedantic path in miniature</b>, covering the whole path from outer duties to final liberation in just five verses.',
      'It does not <b>skip preliminary practices</b> in favour of the highest teaching, nor does it stop at outer ritual without pointing to the inner goal.',
      'The path moves from <b>outer duties and dispassion</b> to inner control and contemplation, to the final recognition of one\'s true nature.',
      'Valued by <b>beginners for understanding the structure of sadhana</b> and by experienced practitioners as a reminder of the whole path.',
    ],
    importantConcepts: [
      '<b>Sadhana:</b> Spiritual practice, the disciplined effort toward liberation.',
      '<b>Vedas and Karma:</b> Study of scripture and performance of duties as foundational practices.',
      '<b>Satsang:</b> The company of the wise, a crucial support on the spiritual path.',
      '<b>Sat-Guru:</b> The perfect master who guides the seeker to realisation.',
      '<b>Three Karmas:</b> Sanchita, Agami, and Prarabdha, explained in the context of the path to freedom.',
      '<b>Brahmaikakshara (Om):</b> The immutable word, worshipped as a representation of Brahman.',
    ],
    practicalLessons: [
      'Study the Vedas daily and perform your duties diligently, offering the results to God.',
      'Keep the company of the wise, serve the Guru, and listen deeply to the Upanishadic declarations.',
      'Control the senses and mind, cultivate virtues like shanti (peace), and eschew desire-ridden actions.',
      'Meditate on "I am Brahman" and renounce pride and the delusion of being the body.',
      'Endure the pairs of opposites (heat and cold), live contentedly on whatever comes, and avoid wasteful talk.',
    ],
    bestQuotes: [
      { text: 'Study the Vedas daily. Perform diligently the duties ordained by them. Dedicate all those actions as worship unto the Lord.', cite: 'Sadhana Panchakam' },
      { text: 'Seek companionship with Men of Wisdom. Be established in firm devotion to the Lord.', cite: 'Sadhana Panchakam' },
      { text: 'Always be absorbed in the attitude "I am Brahman". Renounce pride. Give up the delusory misconception "I am the body".', cite: 'Sadhana Panchakam' },
      { text: 'In solitude live joyously. Quieten your mind in the Supreme Lord. Realise and see the All-pervading Self everywhere.', cite: 'Sadhana Panchakam' },
    ],
    finalTakeaway: 'Sadhana Panchakam is a complete map of the Vedantic path in miniature. In just five verses, Shankarāchārya guides the seeker from the very beginning to liberation: study, duty, devotion, satsang, and dispassion; then inner work of sense-control and contemplation; and finally the recognition of one\'s true nature as Brahman and the peace of abiding in that recognition. It neither skips preliminary practices nor stops at outer ritual, making it a valued guide for beginners and experienced practitioners alike.',
    translation: {
      translator: 'Swami Chinmayananda',
      publisher: 'Chinmaya Mission, Mumbai',
      sanskritVerses: [
        'वेदो नित्यमधीयतां तदुदितं कर्म स्वनुष्ठीयतां तेनेशस्य विधीयतामपचितिः काम्ये मतिस्त्यज्यताम् । पापौघः परिधूयतां भवसुखे दोषोऽनुसन्धीयतामात्मेच्छा व्यवसीयतां निजगृहात्तूर्णं विनिर्गम्यताम् ॥ १॥',
        'सङ्गः सत्सु विधीयतां भगवतो भक्तिर्दृढाऽऽधीयतां शान्त्यादिः परिचीयतां दृढतरं कर्माशु सन्त्यज्यताम् । सद्विद्वानुपसृप्यतां प्रतिदिनं तत्पादुका सेव्यतां ब्रह्मैकाक्षरमर्थ्यतां श्रुतिशिरोवाक्यं समाकर्ण्यताम् ॥ २॥',
        'वाक्यार्थश्च विचार्यतां श्रुतिशिरःपक्षः समाश्रीयतां दुस्तर्कात्सुविरम्यतां श्रुतिमतस्तर्कोऽनुसन्धीयताम् । ब्रह्मास्मीति विभाव्यतामहरहर्गर्वः परित्यज्यतां देहेऽहम्मतिरुज्झ्यतां बुधजनैर्वादः परित्यज्यताम् ॥ ३॥',
        'क्षुद्व्याधिश्च चिकित्स्यतां प्रतिदिनं भिक्षौषधं भुज्यतां स्वाद्वन्नं न तु याच्यतां विधिवशात् प्राप्तेन सन्तुष्यताम् । शीतोष्णादि विषह्यतां न तु वृथा वाक्यं समुच्चार्यतामौदासीन्यमभीप्स्यतां जनकृपानैष्ठुर्यमुत्सृज्यताम् ॥ ४॥',
        'एकान्ते सुखमास्यतां परतरे चेतः समाधीयतां पूर्णात्मा सुसमीक्ष्यतां जगदिदं तद्बाधितं दृश्यताम् । प्राक्कर्म प्रविलाप्यतां चितिबलान्नाप्युत्तरैः श्लिष्यतां प्रारब्धं त्विह भुज्यतामथ परब्रह्मात्मना स्थीयताम् ॥ ५॥',
      ],
      verses: [
        'Study the Vedas daily. Perform diligently the duties ordained by them. Dedicate all those actions as worship unto the Lord. Renounce all desires in the mind. Wash away the hoards of sins in the bosom. Recognise that the pleasures of sense-objects are riddled with pain. Seek the Self with consistent endeavour. Escape from the bondage of home.',
        'Seek companionship with Men of Wisdom. Be established in firm devotion to the Lord. Cultivate the virtues such as Shanti etc. Eschew all desire-ridden actions. Take shelter at a Perfect Master. Every day serve His Lotus feet. Worship Om the Immutable. Listen in depth to the Upanishadic declarations.',
        'Reflect ever upon the meaning of the Upanishadic commandments and take refuge in the Truth of Brahman. Avoid perverse arguments but follow the discriminative rationale of the Sruti (Upanishads). Always be absorbed in the attitude "I am Brahman". Renounce pride. Give up the delusory misconception "I am the body". Give up totally the tendency to argue with wise men.',
        'In hunger diseases get treated. Daily take the medicine of Bhiksha-food. Beg no delicious food. Live contentedly upon whatever comes to your lot as ordained by Him. Endure all the pairs of opposites: heat and cold, and the like. Avoid wasteful talks. Be indifferent. Save yourself from the meshes of other peoples\' kindness.',
        'In solitude live joyously. Quieten your mind in the Supreme Lord. Realise and see the All-pervading Self everywhere. Recognise that the finite Universe is a projection of the Self. Conquer the effects of the deeds done in earlier lives by the present right action. Through wisdom become detached from future actions (Agami). Experience and exhaust Prarabdha, the fruits of past actions. Thereafter, live absorbed in the bhav: "I am Brahman"!',
      ]
    }
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Psychology',
    color: '#1a1a1a',
    accent: '#b8954a',
    readingTime: 5,
    year: 2018,
    rating: 4.8,
    summary: 'Tiny changes, remarkable results. How 1% daily improvement compounds into extraordinary outcomes.',
    keyIdeas: [
      'Habits are the <b>compound interest</b> of self-improvement. 1% better every day results in a 37x improvement over a year.',
      'Focus on <b>systems</b> rather than goals. Goals are about the result, systems are about the process.',
      'Habit stacking: <b>anchor</b> a new habit to an existing one using the formula: "After [CURRENT HABIT], I will [NEW HABIT]."',
      'The <b>two-minute rule</b>: scale down any habit so it takes less than two minutes to start.',
      'Environment design matters more than motivation. <b>Make good habits obvious</b> and bad habits invisible.',
      'Identity-based habits: focus on <b>who you want to become</b>, not what you want to achieve.',
    ],
    mainTakeaways: [
      '<b>Small habits compound</b>, a slight shift in daily routines can lead to remarkable results over time.',
      '<b>Four laws of behavior change:</b> Make it obvious, attractive, easy, and satisfying.',
      'The <b>inversion</b> of the four laws helps break bad habits: make them invisible, unattractive, difficult, and unsatisfying.',
      'Success is not about willpower, it is about <b>designing your environment</b> for the behaviors you want.',
      'Never miss twice. If you slip up, <b>get back on track immediately</b>, one missed day is an accident; two is the start of a new habit.',
    ],
    importantConcepts: [
      '<b>The Plateau of Latent Potential:</b> Results feel slow until a tipping point where the accumulated effort breaks through.',
      '<b>Habit Scorecard:</b> Write down your current habits and become aware of them before trying to change them.',
      '<b>Implementation Intention:</b> "I will [BEHAVIOR] at [TIME] in [LOCATION]."',
      '<b>Temptation Bundling:</b> Pair an action you want to do with an action you need to do.',
      '<b>The Goldilocks Rule:</b> Humans experience peak motivation when working on tasks of just manageable difficulty.',
    ],
    practicalLessons: [
      'Start with <b>one habit</b> that feels easy. Master it before adding another.',
      'Redesign your space: <b>place the book you want to read</b> on your pillow instead of your phone.',
      'Use <b>habit tracking</b>, a simple calendar checkmark creates a chain you do not want to break.',
      'Schedule a <b>weekly review</b> to reflect on what worked and what did not.',
      'Join a <b>culture where your desired behavior is the norm</b>, we imitate the habits of those around us.',
    ],
    bestQuotes: [
      { text: 'You do not rise to the level of your goals. You fall to the level of your systems.', cite: 'James Clear' },
      { text: 'Every action you take is a vote for the type of person you wish to become.', cite: 'James Clear' },
      { text: 'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.', cite: 'James Clear' },
      { text: 'Habits are the compound interest of self-improvement.', cite: 'James Clear' },
      { text: 'Professionals stick to the schedule; amateurs let life get in the way.', cite: 'James Clear' },
    ],
    finalTakeaway: 'Atomic Habits reveals that the key to lasting change is not dramatic transformation but the aggregation of marginal gains. By focusing on small, consistent improvements and designing your environment for success, you can build systems that make good habits inevitable.'
  },
  {
    id: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'Psychology',
    color: '#2d3436',
    accent: '#0984e3',
    readingTime: 6,
    year: 2011,
    rating: 4.6,
    summary: 'The two systems that drive your mind, and how cognitive biases shape every decision you make.',
    keyIdeas: [
      '<b>System 1</b> operates automatically, quickly, with little or no effort. It handles intuition and snap judgments.',
      '<b>System 2</b> allocates attention to effortful mental activities. It is lazy and tires easily.',
      'The <b>availability heuristic</b>: we judge the probability of events by how easily examples come to mind.',
      'The <b>anchoring effect</b>: initial information disproportionately influences our final judgment.',
      '<b>Loss aversion</b>: losses loom larger than gains. The pain of losing is about twice as strong as the pleasure of gaining.',
      '<b>Confirmation bias</b>: we seek evidence that supports our existing beliefs and ignore contradictory information.',
    ],
    mainTakeaways: [
      'Most of your thinking is <b>automatic</b>, System 1 runs the show, and System 2 is the lazy watchdog.',
      'Cognitive biases are <b>systematic errors</b> in thinking that affect everyone, not just novices.',
      'You can <b>slow down</b> decision-making by engaging System 2 when the stakes are high.',
      'The <b>planning fallacy</b>: we consistently underestimate time, costs, and risks of future actions.',
      'Happiness is measured by the <b>experiencing self</b> (what you feel moment to moment), not the remembering self (what you recall).',
    ],
    importantConcepts: [
      '<b>WYSIATI (What You See Is All There Is):</b> System 1 constructs stories from limited information and treats them as complete.',
      '<b>Regression to the Mean:</b> Extreme performances are likely followed by more average ones, not because of anything you did.',
      '<b>The Halo Effect:</b> A positive first impression colors everything that follows.',
      '<b>Narrative Fallacy:</b> We create coherent stories from the past that may not reflect reality.',
      '<b>Peak-End Rule:</b> We judge experiences largely by how they felt at the peak and at the end, not the total sum.',
    ],
    practicalLessons: [
      'Before making an important decision, <b>ask: "What would I advise a friend in this situation?"</b>, this activates System 2.',
      'Use <b>pre-mortems</b>: imagine a future failure and work backward to identify what could go wrong.',
      'When negotiating, <b>be aware of anchors</b>, make the first offer when you have strong information.',
      'Add <b>friction to impulse decisions</b>, wait 24 hours before making non-urgent purchases.',
      'Track your predictions and <b>calibrate over time</b>, honest feedback is the only way to improve judgment.',
    ],
    bestQuotes: [
      { text: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.', cite: 'Daniel Kahneman' },
      { text: 'Nothing in life is as important as you think it is while you are thinking about it.', cite: 'Daniel Kahneman' },
      { text: 'The confidence that individuals have in their beliefs depends mostly on the quality of the story they can tell about what they see.', cite: 'Daniel Kahneman' },
      { text: 'Intelligence is not only the ability to reason; it is also the ability to find relevant material in memory and to deploy attention when needed.', cite: 'Daniel Kahneman' },
    ],
    finalTakeaway: 'Thinking, Fast and Slow is a masterclass in the biases and heuristics that govern human judgment. By understanding the interplay between your intuitive System 1 and deliberate System 2, you can make better decisions, avoid common pitfalls, and develop a more skeptical, questioning mindset toward your own thinking.'
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Productivity',
    color: '#1e272e',
    accent: '#0be881',
    readingTime: 4,
    year: 2016,
    rating: 4.5,
    summary: 'Master the lost art of focused, distraction-free concentration. Deep work is the superpower of the 21st century.',
    keyIdeas: [
      '<b>Deep work</b> is professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.',
      '<b>Shallow work</b> is non-cognitively demanding, logistical-style tasks, often performed while distracted.',
      'The ability to perform deep work is becoming <b>increasingly rare</b> and increasingly valuable in the modern economy.',
      '<b>Four philosophies</b> of deep work scheduling: monastic, bimodal, rhythmic, and journalistic.',
      '<b>Grand gestures</b>, committing significant resources to a deep work session can dramatically increase focus.',
      '<b>Downtime is essential</b> for the unconscious mind to consolidate insights and recharge attention.',
    ],
    mainTakeaways: [
      'Deep work is a <b>superpower</b> in a distracted world, those who cultivate it will thrive.',
      '<b>Schedule every minute</b> of your day to ensure shallow work does not crowd out deep work.',
      '<b>Embrace boredom</b>, the ability to resist distraction is a skill that must be trained.',
      '<b>Quit social media</b>, or at least adopt a "craftsman" approach: only use tools that matter to your core values.',
      '<b>Drain the shallows</b>, aggressively minimize the time spent on shallow, low-value tasks.',
    ],
    importantConcepts: [
      '<b>Attention Residue:</b> When you switch tasks, part of your attention remains stuck on the previous task.',
      '<b>Cognitive Capacity:</b> Your ability to focus is a finite resource that depletes with use.',
      '<b>The Law of Productivity:</b> High-quality work produced = (time spent) × (intensity of focus).',
      '<b>Fixed-Schedule Productivity:</b> Set a firm end time for your workday and work backward to prioritize.',
      '<b>Productive Meditation:</b> Walking or physical activity can be used to focus on a single problem.',
    ],
    practicalLessons: [
      'Identify a <b>deep work ritual</b>: a specific time, place, and duration for focused work each day.',
      'Use the <b>internet sabbath</b>: take one day a week completely offline.',
      'Keep a <b>scoreboard</b> tracking hours spent in deep work each week.',
      'Practice <b>productive meditation</b> during walks or commutes, focus on one problem.',
      'End each day with a <b>shutdown ritual</b>, review the day and plan tomorrow to clear your mind.',
    ],
    bestQuotes: [
      { text: 'Deep work is the ability to focus without distraction on a cognitively demanding task. It is a skill that allows you to quickly master complicated information and produce better results in less time.', cite: 'Cal Newport' },
      { text: 'If you do not produce, you will not thrive, no matter how skilled or talented you are.', cite: 'Cal Newport' },
      { text: 'Clarity about what matters provides clarity about what does not.', cite: 'Cal Newport' },
      { text: 'The key to developing a deep work habit is to move beyond good intentions and add routines and rituals to your working life.', cite: 'Cal Newport' },
    ],
    finalTakeaway: 'Deep Work makes a compelling case that focused, undistracted concentration is the most valuable skill in the modern economy. By ruthlessly eliminating shallow work, embracing boredom, and scheduling deep work sessions, you can produce higher-quality output in less time, and reclaim a sense of genuine accomplishment.'
  },
  {
    id: 'meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    category: 'Philosophy',
    color: '#3d2b1f',
    accent: '#c9a96e',
    readingTime: 4,
    year: 180,
    rating: 4.7,
    summary: 'The private journal of a Roman emperor, timeless Stoic wisdom on discipline, resilience, and the art of living.',
    keyIdeas: [
      'Focus only on what is <b>within your control</b>, your judgments, choices, and actions. Everything else is indifferent.',
      'The universe is <b>rational and interconnected</b>, accept events as they happen, because they are part of a larger natural order.',
      '<b>Memento mori</b>: remember that you will die. Use this awareness to live each day with purpose and urgency.',
      '<b>Perception is choice</b>, you can choose not to be harmed by an event by choosing how you interpret it.',
      '<b>Waste no time</b> arguing about what a good person should be, be one.',
      '<b>Inner citadel</b>: build a fortress of calm within yourself that external events cannot breach.',
    ],
    mainTakeaways: [
      'The <b>dichotomy of control</b> is the foundation of Stoic tranquility, focus only on what you can control.',
      'You are not your thoughts, you are the <b>observer of your thoughts</b> and can choose which to accept.',
      '<b>Obstacles become opportunities</b>, every challenge is a chance to practice virtue.',
      '<b>Live in the present moment</b>, the past is gone, the future is uncertain, only now is real.',
      'Nature\'s plan is <b>reasonable and purposeful</b>, even difficult events serve a larger order.',
    ],
    importantConcepts: [
      '<b>Stoic Reserve Clause:</b> "Fate permitting", always add this caveat when making plans.',
      '<b>View from Above:</b> Imagine the vastness of the cosmos and the smallness of your problems.',
      '<b>Hierarchy of Value:</b> Reason and virtue are the only true goods; wealth, fame, and health are preferred indifferents.',
      '<b>Amor Fati:</b> Love your fate, embrace everything that happens as necessary and beneficial.',
      '<b>Negative Visualization:</b> Regularly contemplate loss to deepen gratitude and reduce fear.',
    ],
    practicalLessons: [
      'Start each morning by <b>anticipating challenges</b>: "Today I will meet annoying people. I will not be surprised."',
      'Pause before reacting, <b>count to ten</b> and ask: "Is this within my control?"',
      'End each day with a <b>brief self-reflection</b>: what did I do well? What can I improve?',
      'When frustrated, <b>zoom out</b>, imagine the view from space and see how small this moment is.',
      'Practice <b>voluntary discomfort</b> occasionally, skip a meal, sleep on the floor, to build resilience.',
    ],
    bestQuotes: [
      { text: 'You have power over your mind, not outside events. Realize this, and you will find strength.', cite: 'Marcus Aurelius' },
      { text: 'The happiness of your life depends upon the quality of your thoughts.', cite: 'Marcus Aurelius' },
      { text: 'Waste no more time arguing what a good man should be. Be one.', cite: 'Marcus Aurelius' },
      { text: 'The impediment to action advances action. What stands in the way becomes the way.', cite: 'Marcus Aurelius' },
    ],
    finalTakeaway: 'Meditations is not a philosophical treatise, it is a personal manual for resilience. Marcus Aurelius shows us that a life of tranquility, purpose, and virtue is possible regardless of external circumstances. The Stoic framework is a practical toolkit for maintaining inner peace amid chaos.'
  },
  {
    id: 'the-psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Business',
    color: '#1a2634',
    accent: '#f9ca24',
    readingTime: 4,
    year: 2020,
    rating: 4.6,
    summary: 'How your emotions, biases, and personal history shape your financial decisions more than any spreadsheet ever could.',
    keyIdeas: [
      'Money is an <b>emotional subject</b>, most financial decisions are made at the dinner table, not in spreadsheets.',
      '<b>Compounding</b> is the most powerful force in finance, but it requires patience that most people lack.',
      'The gap between what you <b>need</b> and what you <b>want</b> is where financial freedom lives.',
      '<b>No one is crazy</b>, everyone has a unique financial worldview shaped by their personal experiences.',
      '<b>Wealth is what you do not see</b>, it is the money you did not spend, not the cars you drive.',
      '<b>Room for error</b> is the most underappreciated financial strategy, it allows you to survive long enough for compounding to work.',
    ],
    mainTakeaways: [
      '<b>Manage your emotions</b>, financial success is 20% head knowledge and 80% behavior.',
      '<b>Compounding requires time</b>, the best strategy is to stay invested and let time do the heavy lifting.',
      'The goal is not to be rich, it is to <b>have enough</b>. Define what "enough" means for you.',
      '<b>Control your time</b>, the highest dividend money pays is the ability to control your schedule.',
      '<b>Humble and scared</b> investors outperform confident and bold ones over the long term.',
    ],
    importantConcepts: [
      '<b>Tail Events:</b> A small number of events drive the majority of outcomes in finance and in life.',
      '<b>The Seduction of Pessimism:</b> Pessimism sounds smarter and more sophisticated than optimism.',
      '<b>Room for Error:</b> The gap between what could happen and what you plan for, the margin of safety.',
      '<b>Getting Wealthy vs. Staying Wealthy:</b> Getting money requires taking risk; keeping it requires the opposite.',
      '<b>The Man in the Car Paradox:</b> People buy expensive things to signal wealth, but the people they want to impress look at the things, not the person.',
    ],
    practicalLessons: [
      'Save money <b>automatically</b>, make it a non-negotiable part of your budget.',
      'Keep an <b>emergency fund</b> of 6-12 months of expenses, your room for error.',
      'Diversify because <b>you do not know what you do not know</b>, humility is a strategy.',
      'Ignore what other people are doing, <b>your financial plan</b> should be based on your goals, not theirs.',
      'Read history, not just forecasts, <b>long-term patterns</b> are more reliable than short-term predictions.',
    ],
    bestQuotes: [
      { text: 'The hardest financial skill is getting the goalpost to stop moving.', cite: 'Morgan Housel' },
      { text: 'Wealth is not about having a lot of money; it is about having control over your time.', cite: 'Morgan Housel' },
      { text: 'Doing something you do not fully understand on a long enough timeline will eventually backfire.', cite: 'Morgan Housel' },
      { text: 'The ability to stick around for a long time without wiping out is what makes compounding work.', cite: 'Morgan Housel' },
    ],
    finalTakeaway: 'The Psychology of Money reframes financial success as a game of behavior, not intelligence. By understanding the emotional drivers behind money decisions, and building a margin of safety into every financial plan, you can achieve a level of financial freedom that has nothing to do with your income and everything to do with your mindset.'
  },
  {
    id: 'sapiens',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Science',
    color: '#2c1810',
    accent: '#e17055',
    readingTime: 6,
    year: 2011,
    rating: 4.7,
    summary: 'A brief history of humankind, how a clever ape conquered the world through stories, cooperation, and agriculture.',
    keyIdeas: [
      'The <b>Cognitive Revolution</b> (70,000 years ago) gave Homo sapiens the ability to believe in shared fictions, gods, nations, money, enabling large-scale flexible cooperation.',
      'The <b>Agricultural Revolution</b> (12,000 years ago) was history\'s biggest fraud, it made humans more prosperous but also more miserable, working harder and eating worse.',
      'The <b>Unification of Humankind</b> happened through three forces: money, empires, and religion, the great unifiers.',
      'The <b>Scientific Revolution</b> (500 years ago) introduced the admission of ignorance, the most powerful engine of progress ever invented.',
      '<b>Imagined Orders</b> like laws, corporations, and human rights exist only in our collective imagination but shape our entire reality.',
      'Happiness is <b>not correlated with material wealth</b>, modern humans are no happier than hunter-gatherers.',
    ],
    mainTakeaways: [
      'Humans dominate the planet because of our <b>unique ability to believe in shared fictions</b>, stories that unite millions.',
      'The Agricultural Revolution was a <b>double-edged sword</b>, it enabled civilization but also created hierarchy, inequality, and suffering.',
      'Money is the <b>most universal story</b> ever told, it allows trust between strangers who share no other values.',
      'The scientific revolution\'s key insight was <b>admitting ignorance</b>, the willingness to say "I do not know" and then find out.',
      'Technology may soon create a <b>new species</b>, Homo deus, through biotechnology and artificial intelligence.',
    ],
    importantConcepts: [
      '<b>Intersubjective Reality:</b> Things that exist only in our shared imagination but affect the world, like money, nations, and laws.',
      '<b>The Scarcity Trap:</b> Agriculture created food surpluses but also population growth, leaving people no better off than before.',
      '<b>Imagined Communities:</b> Nations are not natural, they are stories told by millions of strangers who will never meet.',
      '<b>The Tree of Knowledge:</b> The shift from foraging to farming was not a conscious choice but a gradual, irreversible trap.',
      '<b>Unprecedented Freedom:</b> The Scientific Revolution gave humans the power to re-engineer life itself, for better and worse.',
    ],
    practicalLessons: [
      'Question <b>shared stories</b>, many of the "truths" we accept are social constructs that can be changed.',
      'Understand the <b>scale of history</b>, most of what we worry about is trivial on a 70,000-year timeline.',
      'Recognize <b>the power of narrative</b>, the best storytellers shape the world.',
      'Be skeptical of <b>techno-utopian promises</b>, every revolution has created unintended consequences.',
      'Happiness may be <b>biochemical</b>, focus on contentment rather than the relentless pursuit of more.',
    ],
    bestQuotes: [
      { text: 'There is no justice in history. There is no justice in the world. But the recognition of this fact is the beginning of wisdom.', cite: 'Yuval Noah Harari' },
      { text: 'Humans think in stories, not in facts, numbers, or equations.', cite: 'Yuval Noah Harari' },
      { text: 'The real difference between us and chimpanzees is the mythical glue that binds together large numbers of individuals, families, and groups.', cite: 'Yuval Noah Harari' },
      { text: 'History is something that very few people have been doing while everyone else was ploughing fields and carrying water buckets.', cite: 'Yuval Noah Harari' },
    ],
    finalTakeaway: 'Sapiens offers a sweeping narrative of how Homo sapiens came to dominate the planet. The key insight is that our power lies in our ability to believe in shared fictions, from money to nations to corporations. Understanding this reveals that the structures governing our lives are not fixed laws of nature but human creations that can be reimagined.'
  },
  {
    id: 'the-power-of-now',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    category: 'Psychology',
    color: '#1b3a2b',
    accent: '#a3d9a5',
    readingTime: 4,
    year: 1997,
    rating: 4.4,
    summary: 'A guide to spiritual enlightenment, escaping the prison of your mind by living fully in the present moment.',
    keyIdeas: [
      'The <b>pain-body</b> is an accumulation of past emotional pain that lives in you and seeks more pain through negative thinking.',
      'You are not your mind, the <b>observer of thoughts</b> is the true self, the silent awareness behind the mental noise.',
      'The <b>present moment</b> is all you ever have. The past is memory, the future is imagination, only now is real.',
      '<b>Ego</b> is the false self built from identification with thoughts, emotions, roles, and possessions.',
      '<b>Surrender</b> is not giving up, it is accepting the present moment unconditionally, which opens the door to deeper action.',
      '<b>Watch the thinker</b>, disidentify from your mind by observing your thoughts without judgment.',
    ],
    mainTakeaways: [
      'The <b>root of suffering</b> is identification with the mind, you think you are your thoughts, but you are the awareness behind them.',
      'The present moment is the <b>only gateway to freedom</b>, everything else is mental projection.',
      '<b>Emotions are the body\'s reaction</b> to the mind\'s thoughts, observe them without resistance.',
      '<b>Acceptance of what is</b> dissolves the ego\'s resistance and creates space for transformation.',
      '<b>Stillness is your true nature</b>, beneath the noise of the mind lies a state of peace that is always accessible.',
    ],
    importantConcepts: [
      '<b>Pain-Body:</b> The accumulated emotional residue from past trauma that feeds on negative situations.',
      '<b>The Watchman:</b> The part of you that simply observes thoughts without engaging or judging them.',
      '<b>Space Consciousness:</b> Awareness of the silence between thoughts, the gap between words.',
      '<b>Inner Body Awareness:</b> Turning attention away from thoughts and into the aliveness within your body.',
      '<b>Portal to the Unmanifested:</b> The present moment is the doorway to something beyond form, pure consciousness.',
    ],
    practicalLessons: [
      'Throughout the day, <b>pause and take three conscious breaths</b>, feel the aliveness in your hands and feet.',
      'When you feel negative emotion, <b>ask: "What is my reaction trying to tell me?"</b>, observe without judgment.',
      'Practice <b>single-task focus</b>, do one thing at a time with full attention.',
      'In challenging situations, <b>accept the "isness"</b> of the moment before taking action.',
      'Use <b>everyday activities</b> as meditation, washing dishes, walking, drinking tea, be fully present.',
    ],
    bestQuotes: [
      { text: 'Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life.', cite: 'Eckhart Tolle' },
      { text: 'The primary cause of unhappiness is never the situation but your thoughts about it.', cite: 'Eckhart Tolle' },
      { text: 'You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.', cite: 'Eckhart Tolle' },
      { text: 'The mind is a superb instrument if used rightly. Used wrongly, however, it becomes very destructive.', cite: 'Eckhart Tolle' },
    ],
    finalTakeaway: 'The Power of Now is a direct, uncompromising guide to breaking free from the mind\'s compulsive thinking. The core message is simple yet profound: the present moment is the only place where life can be found. By disidentifying from your thoughts and embracing the now, you can access a dimension of peace that is not dependent on external circumstances.'
  },
  {
    id: 'start-with-why',
    title: 'Start with Why',
    author: 'Simon Sinek',
    category: 'Business',
    color: '#1a1f2e',
    accent: '#3498db',
    readingTime: 4,
    year: 2009,
    rating: 4.3,
    summary: 'Great leaders and companies inspire action by communicating their purpose, the "why", before the "what" or "how."',
    keyIdeas: [
      'The <b>Golden Circle</b> has three layers: Why (purpose), How (process), What (result). Most organizations communicate from the outside in, what first.',
      'Inspired leaders communicate from the <b>inside out</b>, they start with why, then how, then what.',
      '<b>Why</b> is not about making money, that is a result. Why is your purpose, cause, or belief.',
      'The <b>Law of Diffusion of Innovation</b>: mass-market adoption happens only after 15-18% of the population has adopted an idea.',
      '<b>Limbic brain</b> controls feelings, trust, and loyalty, it has no capacity for language. The "why" speaks to the limbic brain.',
      'The <b>Celery Test</b>: if you have a clear why, you know which opportunities to accept and which to reject.',
    ],
    mainTakeaways: [
      'People do not buy <b>what</b> you do; they buy <b>why</b> you do it.',
      'The goal is not to do business with <b>everyone</b> who needs what you have, it is to do business with people who <b>believe</b> what you believe.',
      'Clarity of <b>why</b> precedes everything else, without it, you cannot inspire loyalty or make consistent decisions.',
      '<b>Trust</b> is built when a company\'s actions align with its stated beliefs.',
      'Finding your why requires <b>looking backward</b>, your why is not invented; it is discovered through your past experiences.',
    ],
    importantConcepts: [
      '<b>Golden Circle:</b> Why (core belief) → How (values/processes) → What (products/services).',
      '<b>Celery Test:</b> A clear why acts as a filter for every decision, you know what belongs and what does not.',
      '<b>Gut Instinct:</b> Decisions made from the why feel right intuitively because they align with your core belief.',
      '<b>Early Adopters:</b> The 15-18% who share your why and will champion your cause before the majority catches on.',
      '<b>Manipulation vs. Inspiration:</b> Price cuts, promotions, and fear tactics are manipulations; inspiration starts with why.',
    ],
    practicalLessons: [
      'Write a one-sentence <b>statement of purpose</b> that begins with "To..." and does not mention money or products.',
      'When hiring, <b>prioritize belief over skill</b>, skills can be taught, but belief cannot.',
      'Communicate your why <b>in every message</b>, from your website to your email signature.',
      'Use the <b>Celery Test</b> on your next opportunity: does this align with my core purpose?',
      'Tell <b>stories</b> instead of listing features, stories speak to the limbic brain.',
    ],
    bestQuotes: [
      { text: 'People do not buy what you do; they buy why you do it. And what you do simply proves what you believe.', cite: 'Simon Sinek' },
      { text: 'There is a difference between listening and waiting for your turn to speak.', cite: 'Simon Sinek' },
      { text: 'Working hard for something we do not care about is called stress; working hard for something we love is called passion.', cite: 'Simon Sinek' },
      { text: 'The role of a leader is not to come up with all the great ideas. The role of a leader is to create an environment in which great ideas can happen.', cite: 'Simon Sinek' },
    ],
    finalTakeaway: 'Start with Why provides a simple but powerful framework for inspiring action. The Golden Circle reveals that the most successful leaders and organizations communicate from the inside out, they begin with their purpose and let everything else follow. When you know your why, every decision becomes clearer and more authentic.'
  },
  {
    id: 'mans-search-for-meaning',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor Frankl',
    category: 'Philosophy',
    color: '#2c1810',
    accent: '#d4a574',
    readingTime: 4,
    year: 1946,
    rating: 4.8,
    summary: 'A psychiatrist\'s experience in Nazi concentration camps reveals that the search for meaning is the primary human motivation.',
    keyIdeas: [
      'The <b>will to meaning</b> is the fundamental drive of human beings, the desire to find purpose in life, even in suffering.',
      '<b>Logotherapy</b> (meaning-centered psychotherapy) holds that the primary motivational force is to find meaning, not pleasure or power.',
      'Even in the most extreme circumstances, we retain the <b>freedom to choose our attitude</b> toward our suffering.',
      '<b>Existential vacuum</b> is a widespread condition of meaninglessness, boredom, and emptiness in modern life.',
      'Meaning can be found in three ways: <b>creating a work</b>, <b>experiencing something or someone</b>, and <b>the attitude we take toward unavoidable suffering</b>.',
      'Those who had a <b>"why" to live for</b> were more likely to survive the camps than those who had lost their sense of purpose.',
    ],
    mainTakeaways: [
      '<b>Meaning is the ultimate motivator</b>, even the worst suffering becomes bearable when it serves a purpose.',
      'You cannot always choose your circumstances, but you can <b>choose your response</b> to them.',
      'The <b>existential vacuum</b> is the root cause of much modern anxiety, depression, and addiction.',
      'Logotherapy is not about finding pleasure or avoiding pain, it is about <b>finding meaning</b> in every experience.',
      'Life never ceases to have meaning, even in suffering and death, <b>meaning is unconditional</b>.',
    ],
    importantConcepts: [
      '<b>Tragic Optimism:</b> The ability to remain optimistic in the face of tragedy, pain, guilt, and death.',
      '<b>Paradoxical Intention:</b> A logotherapy technique where the patient intends to do the very thing they fear, breaking the fear cycle.',
      '<b>Dereflection:</b> Turning attention away from a problem toward something meaningful, reducing the problem\'s power.',
      '<b>Sunday Neurosis:</b> The depression that comes from the emptiness of unstructured time, a symptom of the existential vacuum.',
      '<b>The Provisor Fate:</b> The idea that we should live as if we were living for the second time and had acted as wrongly the first time.',
    ],
    practicalLessons: [
      'When facing hardship, <b>ask: "What is this situation asking of me?"</b>, find the meaning in the challenge.',
      'Keep a <b>meaning journal</b>, at the end of each day, write down one thing that gave your day purpose.',
      'Practice <b>self-detachment</b>, the ability to laugh at yourself and distance yourself from your own suffering.',
      'Identify your <b>unique responsibility</b>, what is something only you can contribute to the world?',
      'Use the <b>logotherapy triad</b> to find meaning: a project, a relationship, or an attitude toward hardship.',
    ],
    bestQuotes: [
      { text: 'Those who have a "why" to live can bear with almost any "how."', cite: 'Viktor Frankl' },
      { text: 'Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.', cite: 'Viktor Frankl' },
      { text: 'When we are no longer able to change a situation, we are challenged to change ourselves.', cite: 'Viktor Frankl' },
      { text: 'Life is never made unbearable by circumstances, but only by lack of meaning and purpose.', cite: 'Viktor Frankl' },
    ],
    finalTakeaway: 'Man\'s Search for Meaning offers a profound and timeless insight: the primary drive in human life is not pleasure, but the discovery and pursuit of meaning. Even in the most horrific circumstances, we retain the ability to choose our attitude and find purpose. This is the ultimate human freedom, and the key to resilience.'
  },
  {
    id: 'essentialism',
    title: 'Essentialism',
    author: 'Greg McKeown',
    category: 'Productivity',
    color: '#1e2a2a',
    accent: '#6ab04c',
    readingTime: 4,
    year: 2014,
    rating: 4.4,
    summary: 'The disciplined pursuit of less, doing fewer things better instead of more things adequately.',
    keyIdeas: [
      '<b>Essentialism</b> is not about how to get more things done, it is about how to get the right things done.',
      'The <b>tyranny of the trivial</b>: most of the effort you invest produces minimal results. Focus on the vital few.',
      '<b>Less but better</b>, the essentialist approach is to do fewer things with greater impact.',
      'The <b>90% rule</b>: when evaluating an opportunity, rate it on a scale of 1-100. If it is below 90, say no.',
      '<b>Trade-offs are inevitable</b>, you cannot have it all. Essentialists embrace trade-offs as opportunities to focus.',
      '<b>Boundaries are liberating</b>, clear rules about what you do and do not do create freedom, not restriction.',
    ],
    mainTakeaways: [
      'If it is not a <b>hell yes</b>, it is a <b>no</b>, the essentialist rejects anything that is not a clear priority.',
      '<b>Less is more</b>, the cumulative effect of doing fewer things at a higher quality outstrips doing many things poorly.',
      'You must <b>choose deliberately</b>, the cost of a bad decision is worse than the cost of saying no.',
      '<b>Sleep is essential</b> for high performance, the essentialist prioritizes rest as a strategic asset.',
      'Create <b>buffer zones</b>, always add 50% more time than you think a task will take.',
    ],
    importantConcepts: [
      '<b>The Paradox of Success:</b> Success leads to more options, more options lead to diffused effort, diffused effort leads to failure.',
      '<b>Pareto Principle (80/20):</b> 80% of results come from 20% of efforts. Find and focus on that 20%.',
      '<b>Designing a Life:</b> Essentialism is not a productivity hack, it is a way of life that requires intentional design.',
      '<b>Play is Essential:</b> Play stimulates creativity and exploration, it is not a luxury but a necessity.',
      '<b>The Power of a Clear No:</b> A graceful but firm "no" is more respectful than a resentful "yes."',
    ],
    practicalLessons: [
      'Before committing to anything new, <b>ask: "Will this make the highest possible contribution?"</b>',
      'Schedule <b>thinking time</b>, block out at least one hour per week for pure reflection and prioritization.',
      'Create a <b>stop-doing list</b>, identify the activities that drain your energy without producing results.',
      'Practice the <b>graceful "no"</b>: "I am honored you thought of me, but I cannot take that on right now."',
      'Set <b>non-negotiable boundaries</b>, defend your time and energy as the precious resources they are.',
    ],
    bestQuotes: [
      { text: 'Essentialism is not about how to get more things done; it is about how to get the right things done.', cite: 'Greg McKeown' },
      { text: 'If you do not prioritize your life, someone else will.', cite: 'Greg McKeown' },
      { text: 'The pursuit of the best in every area is a recipe for mediocrity.', cite: 'Greg McKeown' },
      { text: 'What if we stopped celebrating being busy as a measurement of importance? What if we instead celebrated how much time we had spent listening, reading, thinking, and connecting?', cite: 'Greg McKeown' },
    ],
    finalTakeaway: 'Essentialism is a call to stop spreading yourself thin across too many priorities and instead focus on what truly matters. By embracing the disciplined pursuit of less, you can achieve higher quality results, greater satisfaction, and a more meaningful life. The core insight is simple: you cannot do everything, but you can do the right things.'
  },
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Philosophy',
    color: '#1a2a1a',
    accent: '#d4af37',
    readingTime: 3,
    year: 1988,
    rating: 4.3,
    summary: 'A shepherd boy journeys across the desert in search of treasure, and discovers that the journey itself is the real reward.',
    keyIdeas: [
      '<b>Personal Legend</b> is your life\'s unique purpose, the one thing you have always wanted to accomplish.',
      'The <b>universe conspires</b> to help those who pursue their Personal Legend, the universe wants you to fulfill your destiny.',
      '<b>Beginner\'s luck</b> is real, when you first commit to a dream, things often fall into place.',
      '<b>The Soul of the World</b> is a universal spirit that connects all things, when you are aligned with your purpose, you can tap into it.',
      '<b>Fear of failure</b> is the greatest obstacle to fulfilling your Personal Legend, more than any external barrier.',
      '<b>The present moment</b> is where life happens, do not sacrifice today for a future that may never come.',
    ],
    mainTakeaways: [
      'Follow your <b>Personal Legend</b>, the universe will help you achieve it if you have the courage to pursue it.',
      'The <b>journey is the destination</b>, the treasure you seek often lies where you started, but the journey transforms you.',
      '<b>Listen to your heart</b>, it knows the way even when your mind is confused.',
      '<b>Fear is temporary</b>, regret lasts forever. The pain of not pursuing your dream is worse than any risk.',
      'Everything in life is <b>connected</b>, synchronicity is real when you are aligned with your purpose.',
    ],
    importantConcepts: [
      '<b>Personal Legend:</b> Your life\'s unique calling or destiny, the path only you can walk.',
      '<b>The Language of the World:</b> A universal language of intuition, omens, and signs that transcends words.',
      '<b>Maktub:</b> "It is written", the idea that fate and free will work together to guide your journey.',
      '<b>The Soul of the World:</b> The animating spirit of the universe that connects all living things.',
      '<b>Transformation through Travel:</b> The journey itself changes you, preparing you to receive what you seek.',
    ],
    practicalLessons: [
      'Identify your <b>Personal Legend</b>, what is the one thing you have always dreamed of doing?',
      'Pay attention to <b>omens and signs</b>, synchronicities often point toward your path.',
      'Start before you are ready, <b>the first step</b> is the most important one, and the universe will meet you there.',
      'Embrace the <b>detours</b>, they are not distractions but essential parts of the journey.',
      'When you want something, <b>all the universe conspires</b> in helping you to achieve it, believe this.',
    ],
    bestQuotes: [
      { text: 'And, when you want something, all the universe conspires in helping you to achieve it.', cite: 'Paulo Coelho' },
      { text: 'It is the possibility of having a dream come true that makes life interesting.', cite: 'Paulo Coelho' },
      { text: 'The secret of life, though, is to fall seven times and to get up eight times.', cite: 'Paulo Coelho' },
      { text: 'Tell your heart that the fear of suffering is worse than the suffering itself.', cite: 'Paulo Coelho' },
    ],
    finalTakeaway: 'The Alchemist is a fable about the courage to follow your dreams. The central message is that the treasure you seek is often already within you, but the journey to find it is essential. Every person has a Personal Legend, and the universe will support those brave enough to pursue it. The real treasure is not the destination, but the person you become along the way.'
  },
  {
    id: 'the-4-hour-workweek',
    title: 'The 4-Hour Workweek',
    author: 'Tim Ferriss',
    category: 'Business',
    color: '#1a1a2e',
    accent: '#e74c3c',
    readingTime: 5,
    year: 2007,
    rating: 4.1,
    summary: 'Escape the 9-5, live anywhere, and join the new rich, design a lifestyle of freedom, not a life of deferred dreams.',
    keyIdeas: [
      '<b>Lifestyle design</b> replaces the traditional deferred-life plan, you do not have to wait until retirement to enjoy life.',
      '<b>Elimination</b> (the 80/20 rule): 80% of your results come from 20% of your efforts. Focus on that 20% and eliminate the rest.',
      '<b>Automation</b>, create systems that generate income without your direct involvement: outsourcing, geo-arbitrage, and passive revenue.',
      '<b>Liberation</b>, the goal is time and location freedom, not just financial freedom. Work remotely, travel, and live wherever you want.',
      '<b>Fear setting</b>, define your worst-case scenario, plan to prevent it, and realize that inaction is riskier than action.',
      '<b>Parkinson\'s Law</b>, work expands to fill the time available. Shorten deadlines to increase productivity.',
    ],
    mainTakeaways: [
      'The goal is not to <b>work more</b> but to <b>work smarter</b>, focus on the 20% that produces 80% of your results.',
      '<b>Outsource your life</b>, delegate tasks that do not require your unique skills to virtual assistants.',
      '<b>Mini-retirements</b>, take breaks throughout your life, not just at the end. The deferred-life plan is a gamble.',
      '<b>Time is more valuable than money</b>, optimize for freedom, not for income.',
      'Most of what you fear <b>never happens</b>, define your fears and take action despite them.',
    ],
    importantConcepts: [
      '<b>Geo-Arbitrage:</b> Earning in a strong currency while living in a low-cost country.',
      '<b>Lifestyle Business:</b> A business designed to support your desired lifestyle, not to maximize growth.',
      '<b>Selective Ignorance:</b> Actively ignoring information that does not serve your goals, news, gossip, irrelevant emails.',
      '<b>Dreamlining:</b> Setting specific, time-bound lifestyle goals, not just financial goals.',
      '<b>The 80/20 Principle:</b> 80% of outputs come from 20% of inputs, identify and scale that 20%.',
    ],
    practicalLessons: [
      'Apply the <b>Pareto Principle</b> to your work: what 20% of activities produce 80% of your results? Focus only on those.',
      'Set <b>artificial deadlines</b>, use Parkinson\'s Law to complete tasks in half the time.',
      'Practice <b>fear setting</b>: write down the worst-case scenario, how to prevent it, and how to recover if it happens.',
      'Outsource one repetitive task this week, <b>hire a virtual assistant</b> for $5-10/hour.',
      'Plan a <b>mini-retirement</b>, take 1-3 months off to travel or pursue a passion project.',
    ],
    bestQuotes: [
      { text: 'Who you are is defined by what you are willing to pay for.', cite: 'Tim Ferriss' },
      { text: 'The opposite of love is not hate, it is indifference. The opposite of art is not ugliness, it is indifference. The opposite of faith is not heresy, it is indifference. And the opposite of life is not death, it is indifference.', cite: 'Tim Ferriss' },
      { text: 'For all of the most important things, the timing always sucks. Do it anyway.', cite: 'Tim Ferriss' },
      { text: 'A person\'s success in life can usually be measured by the number of uncomfortable conversations he or she is willing to have.', cite: 'Tim Ferriss' },
    ],
    finalTakeaway: 'The 4-Hour Workweek challenges the conventional path of working hard now and retiring later. Ferriss argues that the real goal is lifestyle design, using principles of elimination, automation, and liberation to create a life of freedom and adventure now. The book is a practical, provocative guide to escaping the rat race on your own terms.'
  },
  {
    id: 'grit',
    title: 'Grit',
    author: 'Angela Duckworth',
    category: 'Psychology',
    color: '#1e1e2a',
    accent: '#9b59b6',
    readingTime: 4,
    year: 2016,
    rating: 4.5,
    summary: 'Passion and perseverance are better predictors of success than talent, IQ, or luck. The power of sustained effort over time.',
    keyIdeas: [
      '<b>Grit</b> is the combination of passion and perseverance for long-term goals. It is stamina, not sprint, sustained effort over years.',
      '<b>Talent</b> is how quickly you improve skills. <b>Effort</b> is using those skills to achieve results. Effort counts twice.',
      '<b>Hard work beats talent</b> when talent does not work hard, but the real power is hard work combined with talent.',
      '<b>Purpose</b> is essential, gritty people believe their work matters beyond themselves. Purpose is the engine of perseverance.',
      '<b>Hope</b> is the belief that your efforts can improve your future, it is a learned optimism, not wishful thinking.',
      '<b>The Hard Thing Rule</b>: you must do one hard thing every day, you can quit but not on a bad day, and you choose the thing yourself.',
    ],
    mainTakeaways: [
      'Grit matters <b>more than talent</b> for long-term success, the ability to persist through difficulty is the deciding factor.',
      '<b>Effort counts twice</b>: talent × effort = skill, and skill × effort = achievement.',
      '<b>Interest</b> must come first, you cannot be gritty about something you do not care about.',
      '<b>Deliberate practice</b> is the key to improvement, not just doing what you are good at, but working on weaknesses.',
      '<b>Grit can be grown</b>, from the inside (through interest, purpose, and hope) and from the outside (through a supportive culture).',
    ],
    importantConcepts: [
      '<b>The Effort Double:</b> Effort builds skill AND makes skill productive, it is the multiplier in both equations.',
      '<b>Deliberate Practice:</b> Highly structured, effortful, feedback-driven practice aimed at specific weaknesses.',
      '<b>Purpose-Driven Passion:</b> The deepest form of grit connects your work to a purpose larger than yourself.',
      '<b>The Ericsson Rule:</b> Experts spend 10,000+ hours in deliberate practice, but the quality of practice matters more than the quantity.',
      '<b>Culture of Grit:</b> Surrounding yourself with gritty people raises your own standards of perseverance.',
    ],
    practicalLessons: [
      'Apply the <b>Hard Thing Rule</b>, commit to one hard thing, practice it daily, and do not quit on a bad day.',
      'Find your <b>purpose</b>, connect your daily work to a cause or contribution that matters to others.',
      'Practice <b>deliberate practice</b>, identify a specific weakness, focus on it, get feedback, and repeat.',
      'Cultivate an <b>optimistic self-talk</b>, replace "I cannot do this" with "I cannot do this yet."',
      'Join a <b>gritty community</b>, the people around you shape your standards of effort and perseverance.',
    ],
    bestQuotes: [
      { text: 'Grit is passion and perseverance for very long-term goals. It is having stamina. It is sticking with your future, day in and day out.', cite: 'Angela Duckworth' },
      { text: 'Our potential is one thing. What we do with it is quite another.', cite: 'Angela Duckworth' },
      { text: 'Enthusiasm is common. Endurance is rare.', cite: 'Angela Duckworth' },
      { text: 'Without effort, your talent is nothing more than unmet potential. Without effort, your skill is nothing more than what you could have done but did not.', cite: 'Angela Duckworth' },
    ],
    finalTakeaway: 'Grit redefines what it takes to succeed. Duckworth\'s research shows that passion and perseverance, not talent, are the most reliable predictors of achievement. The good news is that grit can be cultivated. By developing deep interests, connecting work to purpose, practicing deliberately, and maintaining hope, anyone can grow their grit.'
  },
  {
    id: '100-things-successful-people-do',
    title: '100 Things Successful People Do',
    author: 'Nigel Cumberland',
    category: 'Psychology',
    color: '#1b3a3a',
    accent: '#c8a96e',
    readingTime: 6,
    year: 2020,
    rating: 4.3,
    summary: 'One hundred practical, time-tested habits for building a successful, meaningful life, distilled into one clear guide.',
    keyIdeas: [
      '<b>Success is personal</b>, it starts with a dream you choose, not others\' expectations. Define what success means on your own terms.',
      '<b>Emotional intelligence</b> outweighs raw IQ. How you react, empathize, and manage impulses determines 90% of life outcomes.',
      'Apply the <b>Serenity test</b>: focus energy on what you can control; accept what you cannot. Worrying about the uncontrollable wastes your power.',
      'Your <b>daily habits compound</b> into who you become, how you start each day, sleep, health, and focus all shape your trajectory.',
      '<b>Turn work into play</b>, you spend thousands of hours at work each year. If you do not enjoy it, change the work or change how you approach it.',
      '<b>Grit and persistence</b> beat talent. Fail fast, learn, and never give up early. Most people quit right before the breakthrough.',
      'Your <b>tribe and environment</b> define you. You become the people you surround yourself with. Choose wisely.',
    ],
    mainTakeaways: [
      '<b>Relationships and character</b> matter more than wealth, status, or titles. Genuine success is built on integrity, likeability, and deep connections.',
      '<b>Manage your mind</b>, thoughts become feelings, and feelings become actions. Watch for negative loops and reframe them deliberately.',
      '<b>Protect your foundations</b>: health, sleep, time, and boundaries come first. Everything else rests on them.',
      '<b>Do the opposite of the crowd</b> when it matters. If the crowd gets average results, be willing to stand out and be uncomfortable.',
      'Live with <b>purpose and gratitude</b>, count what you have, practice daily gratitude, connect to something bigger than yourself, and plan the legacy you want to leave.',
    ],
    importantConcepts: [
      '<b>The Serenity Test</b>, a framework for distinguishing what you can influence from what you cannot, saving energy for what actually matters.',
      '<b>Emotional intelligence (EQ)</b>, self-awareness, empathy, impulse control, and social skill. More predictive of success than IQ.',
      '<b>Parkinson\'s Law and Pomodoro</b> for focus, work expands to fill time; short bursts with breaks produce better results.',
      'The "Will I regret saying no?" test as a filter for every opportunity, if the answer is no, say yes. If it is not a hell yes, say no.',
      '<b>Your tribe and circle of influence</b>, you become the average of the five people you spend the most time with. Curate your circle.',
    ],
    practicalLessons: [
      '<b>Start each day well</b>, wake earlier, eat well, plan the day, and arrive calm rather than rushed.',
      '<b>Pause before reacting and before pressing "Send."</b> Impulsive messages and reactions damage relationships and reputations.',
      'Keep a <b>gratitude journal</b>, end each day by writing one thing that gave your day meaning.',
      '<b>Set boundaries</b>, get home on time, take full annual leave, disconnect from devices, and say no to what does not serve you.',
      'Practice <b>daily deliberate learning</b>, ask every evening: "What did I learn today?" Stay a student of life.',
    ],
    bestQuotes: [
      { text: 'Success is not about what others think of you, it is about being true to the person you want to become.', cite: 'Nigel Cumberland' },
      { text: 'Focus on what you can control and accept what you cannot. That single distinction changes everything.', cite: 'Nigel Cumberland' },
      { text: 'You are the sum of your habits, your tribe, and the thoughts you choose to keep.', cite: 'Nigel Cumberland' },
      { text: 'How you start the day determines how you perform. Begin well and the rest follows.', cite: 'Nigel Cumberland' },
      { text: 'The regret you fear from trying is nothing compared to the regret of never having tried at all.', cite: 'Nigel Cumberland' },
    ],
    finalTakeaway: '100 Things Successful People Do is not a promise of overnight success, it is a practical toolkit of habits that compound over a lifetime. The book distills decades of coaching wisdom into actionable daily practices: manage your mind, protect your health, build genuine relationships, persist through failure, and define success on your own terms. The core message is simple but profound: a successful life is built one intentional choice at a time.'
  },
  {
    id: 'vivekachudamani',
    title: 'Vivekachudamani',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 5,
    year: 800,
    rating: 4.9,
    summary: 'The Crest-Jewel of Discrimination, a systematic guide to discerning the Real Self from the transient, leading to liberation.',
    keyIdeas: [
      '<b>Discrimination (viveka)</b> between the Real and the unreal is the sole path to liberation. The Atman alone is real; the body, mind, and world are appearances.',
      'The <b>Atman</b> is the witness-consciousness, self-luminous, unchanging, and ever-free. It is <b>not the body, mind, or intellect</b>, but the silent witness of all.',
      'The five sheaths (<b>pancha-koshas</b>): physical, vital, mental, intellectual, and bliss, all are not-Self (anatma). Transcend each to realize the Self.',
      '<b>Adhyasa (superimposition)</b>, mistaking the body-mind for the Self is like seeing a rope as a snake. Knowledge removes the error.',
      '<b>Four qualifications (sadhana chatushtaya)</b> are prerequisites: discrimination, dispassion, six inner treasures (calmness, self-control, etc.), and intense longing for liberation.',
      '<b>Neti, neti</b> ("not this, not this"), negate all that is not the Atman. By stripping away every identification, the pure Self is directly realized.',
    ],
    mainTakeaways: [
      'The Self (<b>Atman</b>) is identical with ultimate Reality (<b>Brahman</b>), this is the non-dual truth of Advaita.',
      'Bondage is caused by <b>ignorance (avidya)</b>; knowledge (<b>jnana</b>) alone removes it. No amount of ritual or action can substitute for direct self-knowledge.',
      'The body-mind is a <b>superimposition</b> on the Self, like a mirage of water on sand. Withdraw identification from it.',
      'A qualified student with <b>discrimination and dispassion</b> can attain liberation in this very life (jivanmukti).',
      'The world is an <b>appearance (mithya)</b>, it has relative reality but no ultimate reality independent of Brahman.',
    ],
    importantConcepts: [
      '<b>Brahman-Atman identity:</b> The individual self and the universal Self are one and the same non-dual Reality.',
      '<b>Maya:</b> The inscrutable power that veils Brahman and projects the world-appearance.',
      '<b>Adhyasa (superimposition):</b> The natural tendency to mistake the non-Self (body, mind) for the Self.',
      '<b>Pancha-koshas:</b> Annamaya (food), Pranamaya (vital), Manomaya (mental), Vijnanamaya (intellectual), Anandamaya (bliss), the five sheaths to be transcended.',
      '<b>Avidya (ignorance):</b> Not mere absence of knowledge, but a positive beginningless entity that veils the Self.',
    ],
    practicalLessons: [
      'Practice daily <b>self-enquiry</b>: repeatedly ask "Who am I?" and trace the sense of "I" back to its source.',
      'Use <b>neti, neti</b> in meditation, mentally negate each identification: "I am not the body, not the mind, not the intellect."',
      'Cultivate <b>dispassion (vairagya)</b> by reflecting on the impermanence of all objects and experiences.',
      'Study the <b>mahavakyas</b> (great sayings): "Tat tvam asi" (That thou art), "Aham Brahmasmi" (I am Brahman).',
      'Seek a <b>qualified teacher (guru)</b>, the path of knowledge requires guidance from one who has realized.',
    ],
    bestQuotes: [
      { text: 'Brahman alone is real; the world is an appearance; the individual self is none other than Brahman.', cite: 'Vivekachudamani' },
      { text: 'The Atman is self-luminous, illumining the mind, the senses, and the body. It is the witness of all modifications.', cite: 'Vivekachudamani' },
      { text: 'The ignorant see the rope and call it a snake; the wise, through discrimination, see only the rope. So is the world to the Self-realized.', cite: 'Vivekachudamani' },
      { text: 'The five sheaths are not the Self. The Self is the witness of the five sheaths, ever free, ever pure.', cite: 'Vivekachudamani' },
      { text: 'By the sword of discrimination, cut the knot of ignorance. Realize the Self and be free.', cite: 'Vivekachudamani' },
    ],
    finalTakeaway: 'Vivekachudamani is a masterwork of Advaita Vedanta that systematically guides the seeker from ignorance to liberation. Its central teaching is that the Self (Atman) is the only Reality, everything else is an appearance. By developing discrimination, cultivating dispassion, and negating all false identifications, one can directly realize the non-dual truth and live in abiding freedom.'
  },
  {
    id: 'atma-bodha',
    title: 'Atma Bodha',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 3,
    year: 800,
    rating: 4.8,
    summary: 'Self-Knowledge, a concise yet profound exposition of the nature of the Self and the path to liberation.',
    keyIdeas: [
      '<b>The Atman is eternal and self-luminous</b>, unborn, undying, and unchanging. It is the inner witness that illumines the body, mind, and senses.',
      '<b>You are not the body</b>, the body is a garment of matter, born, changing, and decaying. The Atman merely inhabits it as the observer.',
      '<b>The five sheaths (pancha-koshas)</b> veil the Self: the physical, vital, mental, intellectual, and bliss sheaths. Each is not-Self (anatma); the Self is the one who witnesses all five.',
      '<b>Ignorance (avidya) creates bondage</b>, mistaking the non-Self for the Self is the root cause of all suffering. Knowledge of the Atman destroys this ignorance, just as sunlight destroys darkness.',
      '<b>Self-knowledge is the only means to liberation</b>, through discrimination and enquiry, the seeker realizes "I am Brahman," and this knowledge alone frees one from the cycle of birth and death.',
      '<b>Bondage and liberation are states of mind</b>, the Atman is ever-free. It appears bound only because of ignorance, and appears liberated when ignorance is removed.',
    ],
    mainTakeaways: [
      'The <b>Self (Atman) is distinct from the body-mind</b>, it is pure, eternal, blissful consciousness, never born and never dying.',
      '<b>All identification with the five sheaths</b> must be transcended through discrimination, "I am not this, I am not this."',
      '<b>Knowledge, not action, removes bondage</b>, no ritual or deed can destroy the ignorance that veils the Self; only direct self-knowledge can.',
      '<b>Liberation is the realization of your true nature</b>, the Atman was never bound; realizing this directly is moksha.',
      '<b>Meditation and self-enquiry</b> are the practical disciplines that lead from intellectual understanding to direct realization.',
    ],
    importantConcepts: [
      '<b>Atman:</b> The innermost Self, witness-consciousness, self-evident, and identical with Brahman.',
      '<b>Pancha-koshas (five sheaths):</b> Annamaya (food/physical), Pranamaya (vital air), Manomaya (mind), Vijnanamaya (intellect), Anandamaya (bliss), layers of the non-Self enveloping the Atman.',
      '<b>Tri-sharira (three bodies):</b> Gross body (sthula), subtle body (sukshma), and causal body (karana), the three vehicles of experience that the Self transcends.',
      '<b>Avidya (ignorance):</b> The primal veil that hides the Self and projects the world-appearance.',
      '<b>Viveka (discrimination):</b> The intellectual discipline of distinguishing the Real from the unreal, the eternal from the transient.',
      '<b>Sakshi (witness):</b> The Atman as the ever-detached observer of all mental and physical activity.',
    ],
    practicalLessons: [
      'Practice daily <b>self-enquiry</b>: "Who am I?", trace the sense of "I" beyond the body, senses, and mind to the witnessing awareness.',
      'Meditate on the <b>"not this, not this"</b> method, mentally renouncing each sheath: not the body, not the breath, not the mind, not the intellect.',
      'Cultivate <b>dispassion (vairagya)</b> toward the transient, reflect that all objects and experiences are perishable.',
      'Contemplate the <b>mahavakya</b> "Aham Brahmasmi" (I am Brahman) until it moves from thought to direct experience.',
      'Study under a <b>qualified teacher</b> and live a disciplined life of sattva, calmness, clarity, and truthfulness purify the mind for self-knowledge.',
    ],
    bestQuotes: [
      { text: 'The Atman is self-luminous, like the light of a lamp. It illumines the body, the senses, the mind, and the intellect.', cite: 'Atma Bodha' },
      { text: 'The Self is never born and never dies. Unborn, eternal, immortal, it is not destroyed even when the body is destroyed.', cite: 'Atma Bodha' },
      { text: 'Just as the sun\'s light reveals the world, the Atman reveals all things, but itself is revealed by nothing else.', cite: 'Atma Bodha' },
      { text: 'By the awakening of Self-knowledge, all ignorance is destroyed, just as darkness is dispelled by the rising sun.', cite: 'Atma Bodha' },
      { text: 'Knowledge alone, not actions, not rites, not rituals, is the direct cause of liberation.', cite: 'Atma Bodha' },
    ],
    finalTakeaway: 'Atma Bodha is a beautifully compact guide to self-knowledge. In sixty-eight verses, Shankarāchārya walks the seeker from the gross body inward through the five sheaths, negating each as not-Self, until the luminous witness, the Atman, is directly revealed. Its message is radical and liberating: you are not what you think you are. You are the eternal, free, blissful consciousness that was never bound. Knowledge of this alone is liberation.',
    translation: {
      translator: 'Swami Chinmayananda',
      publisher: 'Chinmaya Mission, Mumbai',

      sanskritVerses: [
        'तपोभिः क्षीणपापानां शान्तानां वीतरागिणाम् मुमुक्षूणामपेक्ष्योऽयमात्मबोधो विधीयते ॥१॥',
        'बोधोऽन्यसाधनेभ्यो हि साक्षान्मोक्षैकसाधनम् पाकस्य वह्निवज्ज्ञानं विना मोक्षो न सिध्यति ॥२॥',
        'अविरोधितया कर्म नाविद्यां विनिवर्तयेत् विद्याऽविद्यां निहन्त्येव तेजस्तिमिरसङ्घवत् ॥३॥',
        'परिच्छिन्न इवाज्ञानात्तन्नाशे सति केवलः स्वयं प्रकाशते ह्यात्मा मेघापायेंऽशुमानिव ॥४॥',
        'अज्ञानकलुषं जीवं ज्ञानाभ्यासाद्विनिर्मलम् कृत्वा ज्ञानं स्वयं नश्येज्जलं कतकरेणुवत् ॥५॥',
        'संसारः स्वप्नतुल्यो हि रागद्वेषादिसङ्कुलः स्वकाले सत्यवद्भाति प्रबोधे सत्यसद्भवेत् ॥६॥',
        'तावत्सत्यं जगद्भाति शुक्तिकारजतं यथा यावन्न ज्ञायते ब्रह्म सर्वाधिष्ठानमद्वयम् ॥७॥',
        'उपादानेऽखिलाधारे जगन्ति परमेश्वरे सर्गस्थितिलयान् यान्ति बुद्बुदानीव वारिणि ॥८॥',
        'सच्चिदात्मन्यनुस्यूते नित्ये विष्णौ प्रकल्पिताः व्यक्तयो विविधाः सर्वा हाटके कटकादिवत् ॥९॥',
        'यथाकाशो हृषीकेशो नानोपाधिगतो विभुः तद्भेदाद्भिन्नवद्भाति तन्नाशे केवलो भवेत् ॥१०॥',
        'नानोपाधिवशादेव जातिवर्णाश्रमादयः आत्मन्यारोपितास्तोये रसवर्णादि भेदवत् ॥११॥',
        'पंचीकृतमहाभूतसंभवं कर्मसंचितम् शरीरं सुखदुःखानां भोगायतनमुच्यते ॥१२॥',
        'पंचप्राणमनोबुद्धिदशेन्द्रियसमन्वितम् अपंचीकृतभूतोत्थं सूक्ष्माङ्गं भोगसाधनम् ॥१३॥',
        'अनाद्यविद्याऽनिर्वाच्या कारणोपाधिरुच्यते उपाधित्रितयादन्यमात्मानमवधारयेत् ॥१४॥',
        'पंचकोशादियोगेन तत्तन्मय इव स्थितः शुद्धात्मा नीलवस्त्रादियोगेन स्फटिको यथा ॥१५॥',
        'वपुस्तुषादिभिः कोशैर्युक्तं युक्त्यवघाततः आत्मानमन्तरं शुद्धं विविच्यात्तण्डुलं यथा ॥१६॥',
        'सदा सर्वगतोऽप्यात्मा न सर्वत्रावभासते बुद्धावेवावभासेत स्वच्छेषु प्रतिबिम्बवत् ॥१७॥',
        'देहेन्द्रियमनोबुद्धिप्रकृतिभ्यो विलक्षणम् तद्वृत्तिसाक्षिणं विद्यादात्मानं राजवत्सदा ॥१८॥',
        'व्यापृतेष्विन्द्रियेष्वात्मा व्यापारीवाविवेकिनाम् दृश्यतेऽभ्रेषु धावत्सु धावन्निव यथा शशी ॥१९॥',
        'आत्मचैतन्यमाश्रित्य देहेन्द्रियमनोधियः स्वकीयार्थेषु वर्तन्ते सूर्यालोकं यथा जनाः ॥२०॥',
        'देहेन्द्रियगुणान्कर्माण्यमले सच्चिदात्मनि अध्यस्यन्त्यविवेकेन गगने नीलतादिवत् ॥२१॥',
        'अज्ञानान्मानसोपाधेः कर्तृत्वादीनि चात्मनि कल्प्यन्तेऽम्बुगते चन्द्रे चलनादि यथाम्भसः ॥२२॥',
        'रागेच्छासुखदुःखादि बुद्धौ सत्यां प्रवर्तते सुषुप्तौ नास्ति तन्नाशे तस्माद्बुद्धेस्तु नात्मनः ॥२३॥',
        'प्रकाशोऽर्कस्य तोयस्य शैत्यमग्नेर्यथोष्णता स्वभावः सच्चिदानन्दनित्यनिर्मलतात्मनः ॥२४॥',
        'आत्मनः सच्चिदंशश्च बुद्धेर्वृत्तिरिति द्वयम् संयोज्य चाविवेकेन जानामीति प्रवर्तते ॥२५॥',
        'आत्मनो विक्रिया नास्ति बुद्धेर्बोधो न जात्विति जीवः सर्वमलं ज्ञात्वा ज्ञाता द्रष्टेति मुह्यति ॥२६॥',
        'रज्जुसर्पवदात्मानं जीवं ज्ञात्वा भयं वहेत् नाहं जीवः परात्मेति ज्ञातं चेन्निर्भयो भवेत् ॥२७॥',
        'आत्मावभासयत्येको बुद्ध्यादीनीन्द्रियाण्यपि दीपो घटादिवत्स्वात्मा जडैस्तैर्नावभास्यते ॥२८॥',
        'स्वबोधे नान्यबोधेच्छा बोधरूपतयात्मनः न दीपस्यान्यदीपेच्छा यथा स्वात्मप्रकाशने ॥२९॥',
        'निषिध्य निखिलोपाधीन्नेति नेतीति वाक्यतः विद्यादैक्यं महावाक्यैर्जीवात्मपरमात्मनोः ॥३०॥',
        'आविद्यकं शरीरादि दृश्यं बुद्बुदवत्क्षरम् एतद्विलक्षणं विद्यादहं ब्रह्मेति निर्मलम् ॥३१॥',
        'देहान्यत्वान्न मे जन्मजराकार्श्यलयादयः शब्दादिविषयैः सङ्गो निरिन्द्रियतया न च ॥३२॥',
        'अमनस्त्वान्न मे दुःखरागद्वेषभयादयः अप्राणो ह्यमनाः शुभ्र इत्यादि श्रुतिशासनात् ॥३३॥',
        'निर्गुणो निष्क्रियो नित्यो निर्विकल्पो निरंजनः निर्विकारो निराकारो नित्यमुक्तोऽस्मि निर्मलः ॥३४॥',
        'अहमाकाशवत्सर्वं बहिरन्तर्गतोऽच्युतः सदा सर्वसमः सिद्धो निःसङ्गो निर्मलोऽचलः ॥३५॥',
        'नित्यशुद्धविमुक्तैकमखण्डानन्दमद्वयम् सत्यं ज्ञानमनन्तं यत्परं ब्रह्माहमेव तत् ॥३६॥',
        'एवं निरन्तराभ्यस्ता ब्रह्मैवास्मीति वासना हरत्यविद्याविक्षेपान् रोगानिव रसायनम् ॥३७॥',
        'विविक्तदेश आसीनो विरागो विजितेन्द्रियः भावयेदेकमात्मानं तमनन्तमनन्यधीः ॥३८॥',
        'आत्मन्येवाखिलं दृश्यं प्रविलाप्य धिया सुधीः भावयेदेकमात्मानं निर्मलाकाशवत्सदा ॥३९॥',
        'रूपवर्णादिकं सर्वं विहाय परमार्थवित् परिपूर्णचिदानन्दस्वरूपेणावतिष्ठते ॥४०॥',
        'ज्ञातृज्ञानज्ञेयभेदः परे नात्मनि विद्यते चिदानन्दैकरूपत्वाद्दीप्यते स्वयमेव तत् ॥४१॥',
        'एवमात्मारणौ ध्यानमथने सततं कृते उदितावगतिर्ज्वाला सर्वाज्ञानेन्धनं दहेत् ॥४२॥',
        'अरुणेनेव बोधेन पूर्वं सन्तमसे हृते तत आविर्भवेदात्मा स्वयमेवांशुमानिव ॥४३॥',
        'आत्मा तु सततं प्राप्तोऽप्यप्राप्तवदविद्यया तन्नाशे प्राप्तवद्भाति स्वकण्ठाभरणं यथा ॥४४॥',
        'स्थाणौ पुरुषवद्भ्रान्त्या कृता ब्रह्मणि जीवता जीवस्य तात्त्विके रूपे तस्मिन्दृष्टे निवर्तते ॥४५॥',
        'तत्त्वस्वरूपानुभवादुत्पन्नं ज्ञानमंजसा अहं ममेति चाज्ञानं बाधते दिग्भ्रमादिवत् ॥४६॥',
        'सम्यग्विज्ञानवान् योगी स्वात्मन्येवाखिलं जगत् एकं च सर्वमात्मानमीक्षते ज्ञानचक्षुषा ॥४७॥',
        'आत्मैवेदं जगत्सर्वमात्मनोऽन्यन्न विद्यते मृदो यद्वद्घटादीनि स्वात्मानं सर्वमीक्षते ॥४८॥',
        'जीवन्मुक्तस्तु तद्विद्वान्पूर्वोपाधिगुणांस्त्यजेत् सच्चिदानन्दरूपत्वात् भवेद्भ्रमरकीटवत् ॥४९॥',
        'तीर्त्वा मोहार्णवं हत्वा रागद्वेषादिराक्षसान् योगी शान्तिसमायुक्त आत्मारामो विराजते ॥५०॥',
        'बाह्यानित्यसुखासक्तिं हित्वात्मसुखनिर्वृतः घटस्थदीपवत्स्वस्थः स्वान्तरेव प्रकाशते ॥५१॥',
        'उपाधिस्थोऽपि तद्धर्मैरलिप्तो व्योमवन्मुनिः सर्वविन्मूढवत्तिष्ठेदसक्तो वायुवच्चरेत् ॥५२॥',
        'उपाधिविलयाद्विष्णौ निर्विशेषं विशेन्मुनिः जले जलं वियद्व्योम्नि तेजस्तेजसि वा यथा ॥५३॥',
        'यल्लाभान्नापरो लाभो यत्सुखान्नापरं सुखम् यज्ज्ञानान्नापरं ज्ञानं तद्ब्रह्मेत्यवधारयेत् ॥५४॥',
        'यद्दृष्ट्वा नापरं दृश्यं यद्भूत्वा न पुनर्भवः यज्ज्ञात्वा नापरं ज्ञेयं तद्ब्रह्मेत्यवधारयेत् ॥५५॥',
        'तिर्यगूर्ध्वमधः पूर्णं सच्चिदानन्दमद्वयम् अनन्तं नित्यमेकं यत्तद्ब्रह्मेत्यवधारयेत् ॥५६॥',
        'अतद्व्यावृत्तिरूपेण वेदान्तैर्लक्ष्यतेऽद्वयम् अखण्डानन्दमेकं यत्तद्ब्रह्मेत्यवधारयेत् ॥५७॥',
        'अखण्डानन्दरूपस्य तस्यानन्दलवाश्रिताः ब्रह्माद्यास्तारतम्येन भवन्त्यानन्दिनोऽखिलाः ॥५८॥',
        'तद्युक्तमखिलं वस्तु व्यवहारस्तदन्वितः तस्मात्सर्वगतं ब्रह्म क्षीरे सर्पिरिवाखिले ॥५९॥',
        'अनण्वस्थूलमह्रस्वमदीर्घमजमव्ययम् अरूपगुणवर्णाख्यं तद्ब्रह्मेत्यवधारयेत् ॥६०॥',
        'यद्भासा भास्यतेऽर्कादि भास्यैर्यत्तु न भास्यते येन सर्वमिदं भाति तद्ब्रह्मेत्यवधारयेत् ॥६१॥',
        'स्वयमन्तर्बहिर्व्याप्य भासयन्नखिलं जगत् ब्रह्म प्रकाशते वह्निप्रतप्तायसपिण्डवत् ॥६२॥',
        'जगद्विलक्षणं ब्रह्म ब्रह्मणोऽन्यन्न किंचन ब्रह्मान्यद्भाति चेन्मिथ्या यथा मरुमरीचिका ॥६३॥',
        'दृश्यते श्रूयते यद्यद्ब्रह्मणोऽन्यन्न तद्भवेत् तत्त्वज्ञानाच्च तद्ब्रह्म सच्चिदानन्दमद्वयम् ॥६४॥',
        'सर्वगं सच्चिदात्मानं ज्ञानचक्षुर्निरीक्षते अज्ञानचक्षुर्नेक्षेत भास्वन्तं भानुमन्धवत् ॥६५॥',
        'श्रवणादिभिरुद्दीप्तज्ञानाग्निपरितापितः जीवः सर्वमलान्मुक्तः स्वर्णवद्द्योतते स्वयम् ॥६६॥',
        'हृदाकाशोदितो ह्यात्मा बोधभानुस्तमोऽपहृत् सर्वव्यापी सर्वधारी भाति भासयतेऽखिलम् ॥६७॥',
        'दिग्देशकालाद्यनपेक्ष्य सर्वगं शीतादिहृन्नित्यसुखं निरंजनम् यः स्वात्मतीर्थं भजते विनिष्क्रियः स सर्ववित्सर्वगतोऽमृतो भवेत् ॥६८॥',
      ],
      verses: [
        '1. I am composing the ATMA-BODHA, this treatise of the Knowledge of the Self, for those who have purified themselves by austerities and are peaceful in heart and calm, who are free from cravings and are desirous of liberation.',
        '2. Just as the fire is the direct cause for cooking, so without Knowledge no emancipation can be had. Compared with all other forms of discipline Knowledge of the Self is the one direct means for liberation.',
        '3. Action cannot destroy ignorance, for it is not in conflict with or opposed to ignorance. Knowledge does verily destroy ignorance as light destroys deep darkness.',
        '4. The Soul appears to be finite because of ignorance. When ignorance is destroyed the Self which does not admit of any multiplicity truly reveals itself by itself: like the Sun when the clouds pass away.',
        '5. Constant practice of knowledge purifies the Self (\'Jivatman\'), stained by ignorance and then disappears itself - as the powder of the \'Kataka-nut\' settles down after it has cleansed the muddy water.',
        '6. The world which is full of attachments, aversions, etc., is like a dream. It appears to be real, as long as it continues but appears to be unreal when one is awake (i.e., when true wisdom dawns).',
        '7. The Jagat appears to be true (Satyam) so long as Brahman, the substratum, the basis of all this creation, is not realised. It is like the illusion of silver in the mother-of pearl.',
        '8. Like bubbles in the water, the worlds rise, exist and dissolve in the Supreme Self, which is the material cause and the prop of everything.',
        '9. All the manifested world of things and beings are projected by imagination upon the substratum which is the Eternal All-pervading Vishnu, whose nature is Existence-Intelligence; just as the different ornaments are all made out of the same gold.',
        '10. The All-pervading Akasa appears to be diverse on account of its association with various conditionings (Upadhis) which are different from each other. Space becomes one on the destruction of these limiting adjuncts: So also the Omnipresent Truth appears to be diverse on account of Its association with the various Upadhis and becomes one on the destruction of these Upadhis.',
        '11. Because of Its association with different conditionings (Upadhis) such ideas as caste, colour and position are super-imposed upon the Atman, as flavour, colour, etc., are super-imposed on water.',
        '12. Determined for each individual by his own past actions and made up of the Five elements - that have gone through the process of "five-fold self-division and mutual combination" (Pancheekarana) - are born the gross-body, the medium through which pleasure and pain are experienced, the tent-of-experiences.',
        '13. The five Pranas, the ten organs and the Manas and the Buddhi, formed from the rudimentary elements (Tanmatras) before their "five-fold division and mutual combination with one another" (Pancheekarana) and this is the subtle body, the instruments-of-experience (of the individual).',
        '14. Avidya which is indescribable and beginningless is the Causal Body. Know for certain that the Atman is other than these three conditioning bodies (Upadhis).',
        '15. In its identification with the five-sheaths the Immaculate Atman appears to have borrowed their qualities upon Itself; as in the case of a crystal which appears to gather unto itself colour of its vicinity (blue cloth, etc.,).',
        '16. Through discriminative self-analysis and logical thinking one should separate the Pure self within from the sheaths as one separates the rice from the husk, bran, etc., that are covering it.',
        '17. The Atman does not shine in everything although He is All-pervading. He is manifest only in the inner equipment, the intellect (Buddhi): just as the reflection in a clean mirror.',
        '18. One should understand that the Atman is always like the King, distinct from the body, senses, mind and intellect, all of which constitute the matter (Prakriti); and is the witness of their functions.',
        '19. The moon appears to be running when the clouds move in the sky. Likewise to the non-discriminating person the Atman appears to be active when It is observed through the functions of the sense-organs.',
        '20. Depending upon the energy of vitality of Consciousness (Atma Chaitanya) the body, senses, mind and intellect engage themselves in their respective activities, just as men work depending upon the light of the Sun.',
        '21. Fools, because they lack in their powers of discrimination superimpose on the Atman, the Absolute-Existence-Knowledge (Sat-Chit), all the varied functions of the body and the senses, just as they attribute blue colour and the like to the sky.',
        '22. The tremblings that belong to the waters are attributed through ignorance to the reflected moon dancing on it: likewise agency of action, of enjoyment and of other limitations (which really belong to the mind) are delusively understood as the nature of the Self (Atman).',
        '23. Attachment, desire, pleasure, pain, etc., are perceived to exist so long as Buddhi or mind functions. They are not perceived in deep sleep when the mind ceases to exist. Therefore they belong to the mind alone and not to the Atman.',
        '24. Just as luminosity is the nature of the Sun, coolness of water and heat of fire, so too the nature of the Atman is Eternity, Purity, Reality, Consciousness and Bliss.',
        '25. By the indiscriminate blending of the two - the Existence-Knowledge-aspect of the Self and the thought-wave of the intellect - there arises the notion of "I know".',
        '26. Atman never does anything and the intellect of its own accord has no capacity to experience \'I know\'. But the individuality in us delusorily thinks he is himself the seer and the knower.',
        '27. Just as the person who regards a rope as a snake is overcome by fear, so also one considering oneself as the ego (Jiva) is overcome by fear. The ego-centric individuality in us regains fearlessness by realising that It is not a Jiva but is Itself the Supreme Soul.',
        '28. Just as a lamp illumines a jar or a pot, so also the Atman illumines the mind and the sense organs, etc. These material-objects by themselves cannot illumine themselves because they are inert.',
        '29. A lighted-lamp does not need another lamp to illumine its light. So too, Atman which is Knowledge itself needs no other knowledge to know it.',
        '30. By a process of negation of the conditionings (Upadhis) through the help of the scriptural statement \'It is not this, It is not this\', the oneness of the individual soul and the Supreme Soul, as indicated by the great Mahavakyas, has to be realised.',
        '31. The body, etc., up to the "Causal Body" - Ignorance - which are objects perceived, are as perishable as bubbles. Realise through discrimination that I am the \'Pure Brahman\' ever completely separate from all these.',
        '32. I am other than the body and so I am free from changes such as birth, wrinkling, senility, death, etc. I have nothing to do with the sense objects such as sound and taste, for I am without the sense-organs.',
        '33. I am other than the mind and hence, I am free from sorrow, attachment, malice and fear, for "HE is without breath and without mind, Pure, etc.", is the Commandment of the great scripture, the Upanishads.',
        '34. I am without attributes and actions; Eternal (Nitya) without any desire and thought (Nirvikalpa), without any dirt (Niranjana), without any change (Nirvikara), without form (Nirakara), ever-liberated (Nitya Mukta) ever-pure (Nirmala).',
        '35. Like the space I fill all things within and without. Changeless and the same in all, at all times I am pure, unattached, stainless and motionless.',
        '36. I am verily that Supreme Brahman alone which is Eternal, Pure and Free, One, indivisible and non-dual and of the nature of Changeless-Knowledge-Infinite.',
        '37. The impression "I am Brahman" thus created by constant practice destroys ignorance and the agitation caused by it, just as medicine or Rasayana destroys disease.',
        '38. Sitting in a solitary place, freeing the mind from desires and controlling the senses, meditate with unswerving attention on the Atman which is One without-a-second.',
        '39. The wise one should intelligently merge the entire world-of-objects in the Atman alone and constantly think of the Self ever as uncontaminated by anything just as space.',
        '40. He who has realised the Supreme, discards all his identification with the objects of names and forms. (Thereafter) he dwells as an embodiment of the Infinite Consciousness and Bliss. He becomes the Self.',
        '41. There are no distinctions such as "Knower", the "Knowledge" and the "Object of Knowledge" in the Supreme Self. On account of Its being of the nature of endless Bliss, It does not admit of such distinctions within Itself. It alone shines by Itself.',
        '42. When this the lower and the higher aspects of the Self are well churned together, the fire of knowledge is born from it, which in its mighty conflagration shall burn down all the fuel of ignorance in us.',
        '43. The Lord of the early dawn (Aruna) himself has already looted away the thick darkness, when soon the sun rises. The Divine Consciousness of the Self rises when the right knowledge has already killed the darkness in the bosom.',
        '44. Atman is an ever-present Reality. Yet, because of ignorance it is not realised. On the destruction of ignorance Atman is realised. It is like the missing ornament of one\'s neck.',
        '45. Brahman appears to be a \'Jiva\' because of ignorance, just as a post appears to be a ghost. The ego-centric-individuality is destroyed when the real nature of the \'Jiva\' is realised as the Self.',
        '46. The ignorance characterised by the notions \'I\' and \'Mine\' is destroyed by the knowledge produced by the realisation of the true nature of the Self, just as right information removes the wrong notion about the directions.',
        '47. The Yogi of perfect realisation and enlightenment sees through his "eye of wisdom" (Gyana Chakshush) the entire universe in his own Self and regards everything else as his own Self and nothing else.',
        '48. Nothing whatever exists other than the Atman: the tangible universe is verily Atman. As pots and jars are verily made of clay and cannot be said to be anything but clay, so too, to the enlightened soul and that is perceived is the Self.',
        '49. A liberated one, endowed with Self-knowledge, gives up the traits of his previously explained equipments (Upadhis) and because of his nature of Sat-chit-ananda, he verily becomes Brahman like (the worm that grows to be) a wasp.',
        '50. After crossing the ocean of delusion and killing the monsters of likes and dislikes, the Yogi who is united with peace dwells in the glory of his own realised Self - as an Atmaram.',
        '51. The self-abiding Jivan Mukta, relinquishing all his attachments to the illusory external happiness and satisfied with the bliss derived from the Atman, shines inwardly like a lamp placed inside a jar.',
        '52. Though he lives in the conditionings (Upadhis), he, the contemplative one, remains ever unconcerned with anything or he may move about like the wind, perfectly unattached.',
        '53. On the destruction of the Upadhis, the contemplative one is totally absorbed in \'Vishnu\', the All-pervading Spirit, like water into water, space into space and light into light.',
        '54. Realise That to be Brahman, the attainment of which leaves nothing more to be attained, the blessedness of which leaves no other blessing to be desired and the knowledge of which leaves nothing more to be known.',
        '55. Realise that to be Brahman which, when seen, leaves nothing more to be seen, which having become one is not born again in this world and which, when knowing leaves nothing else to be known.',
        '56. Realise that to be Brahman which is Existence-Knowledge-Bliss-Absolute, which is Non-dual, Infinite, Eternal and One and which fills all the quarters - above and below and all that exists between.',
        '57. Realise that to be Brahman which is Non-dual, Indivisible, One and Blissful and which is indicated in Vedanta as the Immutable Substratum, realised after the negation of all tangible objects.',
        '58. Deities like Brahma and others taste only a particle, of the unlimited Bliss of Brahman and enjoy in proportion their share of that particle.',
        '59. All objects are pervaded by Brahman. All actions are possible because of Brahman: therefore Brahman permeates everything as butter permeates milk.',
        '60. Realise that to be Brahman which is neither subtle nor gross: neither short nor long: without birth or change: without form, qualities, colour and name.',
        '61. That by the light of which the luminous, orbs like the Sun and the Moon are illuminated, but which is not illumined by their light, realise that to be Brahman.',
        '62. Pervading the entire universe outwardly and inwardly the Supreme Brahman shines of Itself like the fire that permeates a red-hot iron-ball and glows by itself.',
        '63. Brahman is other than this, the universe. There exists nothing that is not Brahman. If any object other than Brahman appears to exist, it is unreal like the mirage.',
        '64. All that is perceived, or heard, is Brahman and nothing else. Attaining the knowledge of the Reality, one sees the Universe as the non-dual Brahman, Existence-Knowledge-Bliss-Absolute.',
        '65. Though Atman is Pure Consciousness and ever present everywhere, yet It is perceived by the eye-of-wisdom alone: but one whose vision is obscured by ignorance he does not see It; as the blind do not see the resplendent Sun.',
        '66. The \'Jiva\' free from impurities, being heated in the fire of knowledge kindled by hearing and so on, shines of itself like gold.',
        '67. The Atman, the Sun of Knowledge that rises in the sky of the heart, destroys the darkness of the ignorance, pervades and sustains all and shines and makes everything to shine.',
        '68. He who renouncing all activities, who is free of all the limitations of time, space and direction, worships his own Atman which is present everywhere, which is the destroyer of heat and cold, which is Bliss-Eternal and stainless, becomes All-knowing and All-pervading and attains thereafter Immortality.',
      ]
    }
  },
  {
    id: 'tattva-bodha',
    title: 'Tattva Bodha',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    year: 800,
    rating: 4.7,
    summary: 'Knowledge of Truth, a primer on the essential tenets of Advaita Vedanta, presented as a dialogue between a student and his teacher.',
    keyIdeas: [
      'Tattvabodha means the <b>Knowledge of Truth</b>, a primer on Advaita Vedanta written as a <b>dialogue between a student and his teacher</b>.',
      'The text opens with the <b>four-fold qualifications (Sadhana Chatustaya)</b> for spiritual inquiry: <b>viveka</b> (discrimination between the permanent and impermanent), <b>vairagya</b> (dispassion toward worldly pleasures), the <b>six virtues</b> including control of mind and senses, and <b>mumukshutva</b> (intense yearning for liberation).',
      'Discrimination reveals the eternal <b>Atman</b> as distinct from the <b>gross, subtle and causal bodies</b>, and as the witness of the three states of awareness.',
      'The text systematically unfolds the <b>three states of consciousness</b>, waking, dreaming, and deep sleep, and the <b>five sheaths</b> that cover the Self.',
      'The ultimate teaching is that the Self is not the body, mind, or intellect but is <b>identical with Brahman</b>, the infinite reality.',
      'It introduces the great Vedantic statements (Mahavakyas) such as <b>"Tat Tvam Asi" (That Thou Art)</b>.',
    ],
    mainTakeaways: [
      'Tattvabodha means <b>Knowledge of Truth</b> and is mandatory reading for understanding Shankarāchārya\'s philosophy and the Advaita vision.',
      'The <b>four-fold qualifications</b> prepare the seeker: discrimination, dispassion, the six virtues, and the yearning for liberation.',
      'The Self (Atman) is <b>not the body, mind, or intellect</b>, it is the witness of all three states and is identical with Brahman.',
      'The great statement <b>"Tat Tvam Asi" (That Thou Art)</b> points to the oneness of the individual soul and the Supreme Reality.',
      'This structured presentation prepares sincere aspirants for deeper scriptural study and leads them toward <b>experiential realization of their non-dual nature</b>, the path to liberation.',
    ],
    importantConcepts: [
      '<b>Sadhana Chatustaya (Four-fold Qualifications):</b> Viveka, Vairagya, Shat-sampatti (the six virtues), and Mumukshutva.',
      '<b>The Three Bodies:</b> Gross (sthula), Subtle (sukshma), and Causal (karana) bodies that veil the Self.',
      '<b>The Five Sheaths (Pancha Kosha):</b> The coverings of the Self, physical, vital, mental, intellectual, and bliss sheaths.',
      '<b>The Three States of Awareness:</b> Waking, dreaming, and deep sleep, the Atman is the witness of all three.',
      '<b>The Mahavakyas:</b> Great Vedantic statements such as "Tat Tvam Asi" that declare the identity of the individual soul and Brahman.',
      '<b>Jiva, Ishvara and Brahman:</b> The individual, the Lord, and the ultimate reality, ultimately one in Advaita.',
    ],
    practicalLessons: [
      'Begin spiritual inquiry by developing <b>discrimination (viveka)</b> between what is permanent and what is transient.',
      'Cultivate <b>dispassion (vairagya)</b> toward worldly pleasures that do not bring lasting peace.',
      'Practice the <b>six virtues</b>, control of the mind, control of the senses, contentment, endurance, faith, and focused attention.',
      'Nurture an <b>intense yearning for liberation (mumukshutva)</b> as the motive for all spiritual practice.',
      'Study a primer like the Tattvabodha <b>before the deeper texts</b> such as Shankara\'s commentary on the Brahma Sutra.',
    ],
    bestQuotes: [
      { text: 'The Self is not the body, mind, or intellect, it is the witness of all, and it is identical with Brahman.', cite: 'Tattvabodha' },
      { text: 'That Thou Art (Tat Tvam Asi), the individual soul and the Supreme Reality are one.', cite: 'Tattvabodha' },
      { text: 'Discrimination between the permanent and the impermanent is the first step toward liberation.', cite: 'Tattvabodha' },
      { text: 'Knowledge of the truth leads to liberation, for bondage is born of ignorance alone.', cite: 'Tattvabodha' },
    ],
    finalTakeaway: 'Tattvabodha is a compact primer that distills the essential tenets of Advaita Vedanta into a clear question-answer format. By guiding the seeker from the qualifications for inquiry, through the three bodies, five sheaths, and three states of awareness, to the great statements of identity like "Tat Tvam Asi", Shankarāchārya prepares the aspirant for the ultimate realization: the Self is not the body, mind, or intellect but is identical with Brahman. This knowledge of truth is the path to liberation.',
    translation: {
      translator: 'Swami Chinmayananda',
      publisher: 'Chinmaya Mission, Mumbai',
      sanskritVerses: [
        'वासुदेवेन्द्रयोगीन्द्रं नत्वा ज्ञानप्रदं गुरुम् । मुमुक्षूणां हितार्थाय तत्त्वबोधोभिधीयते ॥',
        'साधनचतुष्टयसम्पन्नाधिकारिणां मोक्षसाधनभूतं तत्त्वविवेकप्रकारं वक्ष्यामः । साधनचतुष्टयं किम् ? नित्यानित्यवस्तुविवेकः । इहामुत्रार्थफलभोगविरागः । शमादिषट्कसम्पत्तिः । मुमुक्षुत्वं चेति ।',
        'नित्यानित्यवस्तुविवेकः कः ? नित्यवस्त्वेकं ब्रह्म तद्व्यतिरिक्तं सर्वमनित्यम् । अयमेव नित्यानित्यवस्तुविवेकः ।',
        'विरागः कः ? इहस्वर्गभोगेषु इच्छाराहित्यम् ।',
        'शमादिसाधनसम्पत्तिः का ? शमो दम उपरमस्तितिक्षा श्रद्धा समाधानं च इति । शमः कः ? मनोनिग्रहः । दमः कः ? चक्षुरादिबाह्येन्द्रियनिग्रहः । उपरमः कः ? स्वधर्मानुष्ठानमेव । तितिक्षा का ? शीतोष्णसुखदुःखादिसहिष्णुत्वम् । श्रद्धा कीदृशी ? गुरुवेदान्तवाक्यादिषु विश्वासः श्रद्धा । समाधानं किम् ? चित्तैकाग्रता ।',
        'मुमुक्षुत्वं किम् ? मोक्षो मे भूयाद् इति इच्छा । एतत् साधनचतुष्टयम् । ततस्तत्त्वविवेकस्याधिकारिणो भवन्ति ।',
        'तत्त्वविवेकः कः ? आत्मा सत्यं तदन्यत् सर्वं मिथ्येति । आत्मा कः ? स्थूलसूक्ष्मकारणशरीराद्व्यतिरिक्तः पञ्चकोशातीतः सन् अवस्थात्रयसाक्षी सच्चिदानन्दस्वरूपः सन् यस्तिष्ठति स आत्मा ।',
        'स्थूलशरीरं किम् ? पञ्चीकृतपञ्चमहाभूतैः कृतं सत्कर्मजन्यं सुखदुःखादिभोगायतनं शरीरम् अस्ति जायते वर्धते विपरिणमते अपक्षीयते विनश्यतीति षड्विकारवदेतत्स्थूलशरीरम् ।',
        'सूक्ष्मशरीरं किम् ? अपञ्चीकृतपञ्चमहाभूतैः कृतं सत्कर्मजन्यं सुखदुःखादिभोगसाधनं पञ्चज्ञानेन्द्रियाणि पञ्चकर्मेन्द्रियाणि पञ्चप्राणादयः मनश्चैकं बुद्धिश्चैका एवं सप्तदशाकलाभिः सह यत्तिष्ठति तत्सूक्ष्मशरीरम् ।',
        'श्रोत्रं त्वक् चक्षुः रसना घ्राणम् इति पञ्च ज्ञानेन्द्रियाणि । श्रोत्रस्य दिग्देवता । त्वचो वायुः । चक्षुषः सूर्यः । रसनाया वरुणः । घ्राणस्य अश्विनौ । श्रोत्रस्य विषयः शब्दग्रहणम् । त्वचो विषयः स्पर्शग्रहणम् । चक्षुषो विषयः रूपग्रहणम् । रसनाया विषयः रसग्रहणम् । घ्राणस्य विषयः गन्धग्रहणम् इति ।',
        'वाक्पाणिपादपायूपस्थानीति पञ्चकर्मेन्द्रियाणि । वाचो देवता वह्निः । हस्तयोरिन्द्रः । पादयोर्विष्णुः । पायोर्मृत्युः । उपस्थस्य प्रजापतिः । वाचो विषयः भाषणम् । पाण्योर्विषयः वस्तुग्रहणम् । पादयोर्विषयः गमनम् । पायोर्विषयः मलत्यागः । उपस्थस्य विषयः आनन्द इति ।',
        'कारणशरीरं किम् ? अनिर्वाच्यानाद्यविद्यारूपं शरीरद्वयस्य कारणमात्रं सत्स्वरूपाऽज्ञानं निर्विकल्पकरूपं यदस्ति तत्कारणशरीरम् ।',
        'अवस्थात्रयं किम् ? जाग्रत्स्वप्नसुषुप्त्यवस्थाः । जाग्रदवस्था का ? श्रोत्रादिज्ञानेन्द्रियैः शब्दादिविषयैश्च ज्ञायते इति यत् सा जाग्रदावस्था । स्थूलशरीराभिमानी आत्मा विश्व इत्युच्यते । स्वप्नावस्था केति चेत् ? जाग्रदवस्थायां यद्दृष्टं यद् श्रुतम् तज्जनितवासनया निद्रासमये यः प्रपञ्चः प्रतीयते सा स्वप्नावस्था । सूक्ष्मशरीराभिमानी आत्मा तैजस इत्युच्यते । अतः सुषुप्त्यवस्था का ? अहं किमपि न जानामि सुखेन मया निद्राऽनुभूयत इति सुषुप्त्यवस्था । कारणशरीराभिमानी आत्मा प्राज्ञ इत्युच्यते ।',
        'पञ्च कोशाः के ? अन्नमयः प्राणमयः मनोमयः विज्ञानमयः आनन्दमयश्चेति । अन्नमयः कः ? अन्नरसेनैव भूत्वा अन्नरसेनैव वृद्धिं प्राप्य अन्नरूपपृथिव्यां यद्विलीयते तदन्नमयः कोशः स्थूलशरीरम् । प्राणमयः कः ? प्राणाद्याः पञ्चवायवः वागादीन्द्रियपञ्चकं प्राणमयः कोशः । मनोमयः कोशः कः ? मनश्च ज्ञानेन्द्रियपञ्चकं मिलित्वा यो भवति स मनोमयः कोशः । विज्ञानमयः कः ? बुद्धिज्ञानेन्द्रियपञ्चकं मिलित्वा यो भवति स विज्ञानमयः कोशः । आनन्दमयः कः ? एवमेव कारणशरीरभूताविद्यास्थमलिनसत्त्वं प्रियादिवृत्तिसहितं सत् आनन्दमयः कोशः । एतत्कोशपञ्चकम् ।',
        'मदीयं शरीरं मदीयाः प्राणाः मदीयं मनश्च मदीया बुद्धिर्मदीयं अज्ञानमिति स्वेनैव ज्ञायते । तद्यथा मदीयत्वेन ज्ञातं कटककुण्डल गृहादिकं स्वस्माद्भिन्नं तथा पञ्चकोशादिकं स्वस्माद्भिन्नम् मदीयत्वेन ज्ञातमात्मा न भवति ॥',
        'आत्मा तर्हि कः ? सच्चिदानन्दस्वरूपः । सत्किम् ? कालत्रयेऽपि तिष्ठतीति सत् । चित्किम् ? ज्ञानस्वरूपः । आनन्दः कः ? सुखस्वरूपः । एवं सच्चिदानन्दस्वरूपं स्वात्मानं विजानीयात् ।',
        'अथ चतुर्विंशतितत्त्वोत्पत्तिप्रकारं वक्ष्यामः । ब्रह्माश्रया सत्त्वरजस्तमोगुणात्मिका माया अस्ति । ततः आकाशः सम्भूतः । आकाशाद् वायुः । वायोस्तेजः । तेजस आपः । अभ्धयः पृथिवी । एतेषां पञ्चतत्त्वानां मध्ये आकाशस्य सात्विकांशात् श्रोत्रेन्द्रियं सम्भूतम् । वायोः सात्विकांशात् त्वगिन्द्रियं सम्भूतम् । अग्नेः सात्विकांशात् चक्षुरिन्द्रियं सम्भूतम् । जलस्य सात्विकांशात् रसनेन्द्रियं सम्भूतम् । पृथिव्याः सात्विकांशात् घ्राणेन्द्रियं सम्भूतम् । एतेषां पञ्चतत्त्वानां समष्टिसात्विकांशात् मनोबुद्ध्यहङ्कार चित्तान्तःकरणानि सम्भूतानि । सङ्कल्पविकल्पात्मकं मनः । निश्चयात्मिका बुद्धिः । अहंकर्ता अहंकारः । चिन्तनकर्तृ चित्तम् । मनसो देवता चन्द्रमाः । बुद्धे ब्रह्मा । अहंकारस्य रुद्रः । चित्तस्य वासुदेवः ।',
        'एतेषां पञ्चतत्त्वानां मध्ये आकाशस्य राजसांशात् वागिन्द्रियं सम्भूतम् । वायोः राजसांशात् पाणीन्द्रियं सम्भूतम् । वन्हेः राजसांशात् पादेन्द्रियं सम्भूतम् । जलस्य राजसांशात् उपस्थेन्द्रियं सम्भूतम् । पृथिव्या राजसांशात् गुदेन्द्रियं सम्भूतम् । एतेषां समष्टिराजसांशात् पञ्चप्राणाः सम्भूताः । एतेषां पञ्चतत्त्वानां तामसांशात् पञ्चीकृतपञ्चतत्त्वानि भवन्ति । पञ्चीकरणं कथम् इति चेत् । एतेषां पञ्चमहाभूतानां तामसांशस्वरूपम् एकमेकं भूतं द्विधा विभज्य एकमेकमर्धं पृथक् तूष्णीं व्यवस्थाप्य अपरमपरमर्धं चतुर्धां विभज्य स्वार्धमन्येषु अर्धेषु स्वभागचतुष्टयसंयोजनं कार्यम् । तदा पञ्चीकरणं भवति । एतेभ्यः पञ्चीकृतपञ्चमहाभूतेभ्यः स्थूलशरीरं भवति । एवं पिण्डब्रह्माण्डयोरैक्यं सम्भूतम् ।',
        'स्थूलशरीराभिमानि जीवनामकं ब्रह्मप्रतिबिम्बं भवति । स एव जीवः प्रकृत्या स्वस्मात् ईश्वरं भिन्नत्वेन जानाति । अविद्योपाधिः सन् आत्मा जीव इत्युच्यते । मायोपाधिः सन् ईश्वर इत्युच्यते । एवं उपाधिभेदात् जीवेश्वरभेददृष्टिः यावत्पर्यन्तं तिष्ठति तावत्पर्यन्तं जन्ममरणादिरूपसंसारो न निवर्तते । तस्मात्कारणान्न जीवेश्वरयोर्भेदबुद्धिः स्वीकार्या ।',
        'ननु साहंकारस्य किंचिज्ज्ञस्य जीवस्य निरहंकारस्य सर्वज्ञस्य ईश्वरस्य तत्त्वमसीति महावाक्यात् कथमभेदबुद्धिः स्यादुभयोः विरुद्धधर्माक्रान्तत्वात् । इति चेन्न । स्थूलसूक्ष्मशरीराभिमानी त्वंपदवाच्यार्थः । उपाधिविनिर्मुक्तं समाधिदशासम्पन्नं शुद्धं चैतन्यं त्वंपदलक्ष्यार्थः । एवं सर्वज्ञत्वादिविशिष्ट ईश्वरः तत्पदवाच्यार्थः । उपाधिशून्यं शुद्धचैतन्यं तत्पदलक्ष्यार्थः । एवं च जीवेश्वरयो चैतन्यरूपेणाऽभेदे बाधकाभावः ।',
        'एवं च वेदान्तवाक्यैः सद्गुरूपदेशेन च सर्वेष्वपि भूतेषु येषां ब्रह्मबुद्धिरुत्पन्ना ते जीवन्मुक्ताः इत्यर्थः । ननु जीवन्मुक्तः कः ? यथा देहोऽहं पुरुषोऽहं ब्राह्मणोऽहं शूद्रोऽहमस्मीति दृढनिश्चयस्तथा नाहं ब्राह्मणः न शूद्रः न पुरुषः किन्तु असंगः सच्चिदानन्द स्वरूपः प्रकाशरूपः सर्वान्तर्यामी चिदाकाशरूपोऽस्मीति दृढनिश्चय रूपोऽपरोक्षज्ञानवान् जीवन्मुक्तः ॥ ब्रह्मैवाहमस्मीत्यपरोक्षज्ञानेन निखिलकर्मबन्धविनिर्मुक्तः स्यात् ।',
        'कर्माणि कतिविधानि सन्तीति चेत् आगामिसञ्चितप्रारब्धभेदेन त्रिविधानि सन्ति । ज्ञानोत्पत्त्यनन्तरं ज्ञानिदेहकृतं पुण्यपापरूपं कर्म यदस्ति तदागामीत्यभिधीयते । सञ्चितं कर्म किम् ? अनन्तकोटिजन्मनां बीजभूतं सत् यत्कर्मजातं पूर्वार्जितं तिष्ठति तत् सञ्चितं ज्ञेयम् । प्रारब्धं कर्म किमिति चेत् । इदं शरीरमुत्पाद्य इह लोके एवं सुखदुःखादिप्रदं यत्कर्म तत्प्रारब्धं भोगेन नष्टं भवति प्रारब्धकर्मणां भोगादेव क्षय इति ।',
        'सञ्चितं कर्म ब्रह्मैवाहमिति निश्चयात्मकज्ञानेन नश्यति । आगामि कर्म अपि ज्ञानेन नश्यति किंच आगामि कर्मणां नलिनीदलगतजलवत् ज्ञानिनां सम्बन्धो नास्ति । किंच ये ज्ञानिनं स्तुवन्ति भजन्ति अर्चयन्ति तान्प्रति ज्ञानिकृतं आगामि पुण्यं गच्छति । ये ज्ञानिनं निन्दन्ति द्विषन्ति दुःखप्रदानं कुर्वन्ति तान्प्रति ज्ञानिकृतं सर्वमागामि क्रियमाणं यदवाच्यं कर्म पापात्मकं तद्गच्छति । सुहृदः पुण्यकृतं दुर्हृदः पापकृत्यं गृह्णन्ति ।',
        'तथा चात्मवित्संसारं तीर्त्वा ब्रह्मानन्दमिहैव प्राप्नोति । तरति शोकमात्मवित् इति श्रुतेः । तनुं त्यजतु वा काश्यां श्वपचस्य गृहेऽथ वा । ज्ञानसम्प्राप्तिसमये मुक्ताऽसौ विगताशयः । इति स्मृतेश्च ।',
        'इति श्रीशङ्करभगवत्पादाचार्यप्रणीतः तत्त्वबोधप्रकरणं समाप्तम् ।',
      ],
      verses: [
        'Having saluted Shri Vasudevendra, the king of yogis, the guru who is the bestower of knowledge, Tattvabodha is expounded for the benefit of the seekers. This opening shloka is in the nature of an invocation (mangalacharya) to the Guru; the rest of the text is in prose.',
        'We shall explain to those who are endowed with the four-fold qualifications, the mode of discrimination which is the means of liberation. What are the four-fold qualifications? The capacity to discriminate between the permanent and the impermanent; dispassion to the enjoyment of the fruits of one\'s actions here and hereafter; the group of six accomplishments (inner wealth) beginning with shama; and the yearning for liberation.',
        'What is meant by discrimination between the permanent and the impermanent? The reality alone is eternal; everything else is ephemeral. This conviction alone is the discrimination between the permanent and the impermanent.',
        'What is dispassion? The absence of the desire for the enjoyments (of the fruits of one\'s actions) in this world and in heaven.',
        'What is the inner wealth starting with shama? They are shama, dama, uparama, titiksha, shraddha and samadhana. What is shama? It is control or mastery over the mind. What is dama? It is the control of the external sense organs such as the eyes etc. What is uparama? It is the strict observance of one\'s own dharma (duty). What is titiksha? It is endurance of heat and cold, pleasure and pain etc. What is the nature of shraddha? Faith in the words etc., of the guru and Vedanta (scriptures) is shraddha. What is samadhana? It is the single-pointedness of the mind.',
        'What is mumukshutvam? "Let me attain liberation", this intense desire is mumukshutvam. This is the four-fold qualification. Thereafter, they become fit for the enquiry into the Truth.',
        'What is enquiry into the truth? It is the firm conviction that the Self is real and all, other than that, is unreal. What is the Self? That which is other than the gross, subtle and causal bodies, beyond the five sheaths, the witness of the three states of consciousness and of the nature of existence-consciousness-bliss is the Self.',
        'What is the gross body? That which is made up of the five great elements that have undergone the process of panchikarana, born as a result of the good actions of the past, the container of experiences like joy, sorrow etc., and subject to the six modifications, to exist potentially, to be born, to grow, to mature, to decay and to die, is the gross body.',
        'What is the subtle body? That which is composed of the five great elements that have not undergone grossification, born of the good actions of the past, the instrument for the experience of joy, sorrow etc., and constituted of seventeen items, the five sense organs of perception, the five sense organs of action, the five pranas, the mind and the intellect, is the subtle body.',
        'The five sense organs of perception are the ears, skin, eyes, tongue and nose. The presiding deities of the organs of perception are: space of the ears, air of the skin, the sun of the eyes, water of the tongue, and the Ashvini Kumaras of the nose. The field of experience of the organs of perception are: cognition of sound for the ear; cognition of touch for the skin; cognition of sight for the eyes; cognition of taste for the tongue; and cognition of smell for the nose.',
        'The five sense organs of action are speech, the hands, the legs, the anus and the genitals. The presiding deities of the organs of action are: agni (fire) of speech, Indra of the hands, Vishnu of the legs, Yama of the anus, and Prajapati of the genitals. The function of speech is to speak; of the hands, to grasp things; of the legs, locomotion; of the anus, elimination of waste; and of the genitals, pleasure (procreation).',
        'That which is inexplicable, beginningless, in the form of ignorance, the sole cause of the two bodies (gross and subtle), ignorant of one\'s own true nature, and free from duality, is the causal body.',
        'What are the three states? They are the waking, dream and deep sleep states. What is the waking state? The state of experience in which the sense objects like sound are perceived through the sense organs like the ears is the waking state; the Self identified with the gross body is then called vishva. What is the dream state? The world that is projected while in sleep from the impressions born of what was seen and heard in the waking state is the dream state; the Self identified with the subtle body is called taijasa. What is the deep sleep state? That state about which one says later, "I did not know anything, I enjoyed a good sleep", is the deep sleep state; the Self identified with the causal body is called prajna.',
        'What are the five sheaths? They are Annamaya, Pranamaya, Manomaya, Vijnanamaya and Anandamaya. What is the food sheath? That which is born from the essence of food, grows by the essence of food, and merges into the earth, which is of the nature of food, is called the food sheath or the gross body. What is the vital air sheath? The five physiological functions like prana etc., and the five organs of action like speech etc., together form the vital air sheath. What is the mental sheath? The mind and the five sense organs of perception together form the mental sheath. What is the intellectual sheath? The intellect and the five sense organs of perception together is the intellectual sheath; it is subtle, pervades and controls the former three sheaths. What is the bliss sheath? Established in ignorance, which is of the form of the causal body, of impure nature, united with thoughts like priya etc., is the bliss sheath. These are the five sheaths.',
        'One knows by oneself: "This is my body, these are my pranas, this is my mind, this is my intellect, this is my ignorance." Just as bangles, earrings, a house etc., known as "mine", are all other than the knower "me", so too the five sheaths etc., are known by the Self as "my body, my pranas, my mind, my intellect, and my knowledge" and are therefore not the Self.',
        'Then what is the Self? It is of the nature of existence, consciousness, bliss. What is existence? That which remains unchanged in the three periods of time (past, present and future) is existence. What is consciousness? It is of the nature of absolute knowledge. What is bliss? It is of the nature of absolute happiness. Thus one should know oneself to be of the nature of existence-consciousness-bliss.',
        'Now we shall explain the evolution of the twenty-four factors. Depending on Brahman, maya exists, which is of the nature of the three qualities of sattva, rajas and tamas. From that (maya), space was born; from space, air; from air, fire; from fire, water; from water, earth. Among these five great elements, from the sattvic aspect of space the organ of hearing, the ear, evolved; from the sattvic aspect of air, the organ of touch, the skin; from the sattvic aspect of fire, the organ of sight, the eye; from the sattvic aspect of water, the organ of taste, the tongue; and from the sattvic aspect of earth, the organ of smell, the nose. From the total sattvic aspect of these five elements the inner instruments, mind, intellect, ego and memory, are formed. The mind is of the nature of indecision, the intellect of the nature of decision, the ego of the nature of the notion of doership, and memory of the nature of thinking or recollection. The presiding deity of the mind is the moon, of the intellect Brahma, of the ego Rudra, and of memory Vasudeva.',
        'Among these five elements, from the rajas aspect of space the organ of speech is formed; from the rajas aspect of air, the organ of grasping, the hands; from the rajas aspect of fire, the organ of locomotion, the legs; from the rajas aspect of water, the organ of procreation; and from the rajasic aspect of earth, the anus. From the total rajas aspect of these five elements, the five vital airs, the pranas, are formed. From the tamas aspect of these five elements, the grossified five elements are born. If it is asked how this panchikarana takes place, it is as follows: the tamas aspect of each of the five elements divides into two equal parts; one half of each remains intact; the other half of each gets divided into four equal parts; then to the intact half of one element, one-eighth portion from each of the other four elements gets joined; then panchikarana is completed. From these five grossified elements, the gross body is formed. Thus, there is identity between the microcosm and the macrocosm.',
        'The reflection of Brahman, which identifies itself with the gross body, is called the jiva. This jiva by nature takes Ishwara to be different from itself. The Self conditioned by ignorance (avidya) is called jiva; the Self conditioned by maya is called Ishwara. So long as the notion that the jiva and Ishwara are different remains, due to the difference in the conditioning, till then there is no redemption from samsara, which is of the form of repeated birth, death etc. Due to that reason, the notion that the jiva is different from Ishwara should not be accepted.',
        'But the jiva is endowed with ego and its knowledge is limited, whereas Ishwara is without ego and is omniscient. Then how can there be identity, as stated in the mahavakya "That Thou Art", between these two who are possessed of contradictory characteristics? If there is such a doubt, no, it is not so. The literal meaning of the word "thou" is the one identified with the gross and subtle bodies; the implied meaning of the word "thou" is pure awareness, which is free from all conditionings and which is appreciated in the state of samadhi. So also the literal meaning of the word "That" is Ishwara, having omniscience etc.; the implied meaning of the word "That" is the pure awareness, free from all conditionings. Thus there is no contradiction regarding the identity between the jiva and Ishwara from the standpoint of awareness.',
        'Thus by the words of Vedanta and the teachings of the satguru, those in whom the vision of the truth is born in all beings are liberated while living (jivanmukta). Then who is a jivanmukta? Just as one has the firm belief "I am the body; I am a man; I am a Brahmin; I am a Shudra", in the same way one who by his immediate knowledge (aparoksha jnana) has firmly ascertained, "I am not a Brahmin; I am not a Shudra; I am not a man", but "I am unattached, and of the nature of existence-consciousness-bliss, effulgent, the indweller of all and the formless awareness", is a jivanmukta. By the immediate knowledge that "I am Brahman alone", one becomes free from the bondage of all karmas.',
        'If one is asked how many kinds of karmas there are, the reply is: there are three kinds of karmas, viz., agami, sanchita and prarabdha. The results of actions, good or bad, performed by the body of the realised soul (jnani) after the dawn of knowledge is known as agami. What is sanchita karma? The results of actions performed in all previous births, which are in seed form to give rise to endless crores of births in the future, is called sanchita (accumulated) karma. What is prarabdha karma? Having given birth to this body, the actions which give results in this very world, in the form of happiness or misery, and which can be destroyed only by enjoying or suffering them, is called prarabdha karma.',
        'Sanchita karma is destroyed by the firm knowledge "I am Brahman" alone. The agami karma is also destroyed by knowledge, and the wise man is not affected by it, as a lotus leaf is not affected by the water on it. Further, to those who praise, serve and worship the wise man go the results of the actions done by the wise man. To those who criticise, hate or cause pain to the wise man go the results of all unpraiseworthy and sinful actions done by the wise man.',
        'Thus the knower of the Self, having crossed samsara, attains supreme bliss here itself. The shruti affirms, the knower of the Self goes beyond all sorrow. Let the wise man cast off his body in Kashi or in the house of a dog-eater; it is immaterial, because at the time of gaining knowledge itself he is liberated, being freed from all the results of his actions. So assert the smritis too.',
        'Thus concludes the Tattvabodha, composed by the revered Adi Shankarāchārya.',
      ]
    }
  },
  {
    id: 'kaupina-panchakam',
    title: 'Kaupina Panchakam',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    year: 800,
    rating: 4.8,
    summary: 'Five Verses on the Loincloth, a joyful celebration of the sannyasi\'s life of complete inner and outer freedom.',
    keyIdeas: [
      'The <b>Kaupina Panchakam</b> ("Five Verses on the Loincloth") is a joyful poem by Shankarāchārya celebrating the life of the <b>sannyasi</b>, the wandering monk who has renounced all possessions.',
      'The <b>kaupina</b> (loincloth) is a symbol for the life of <b>complete inner and outer freedom</b>, the seemingly impoverished life is actually the richest of all.',
      'Each verse ends with the refrain <b>"blessed indeed are those who wear only the kaupina"</b>, a declaration that outer simplicity is the natural expression of inner fullness.',
      'The sannyasi has seen through the illusion of the world and <b>rests in the knowledge of the Self</b>, unaffected by praise or blame, heat or cold.',
      'This is not asceticism for its own sake, when one truly knows the Self as the source of all joy, <b>there is nothing outside that needs to be held onto</b>.',
      'A favourite text in Advaita circles for its <b>warmth and lightness</b>, it reads more like a song than a philosophical treatise.',
    ],
    mainTakeaways: [
      'When one truly knows the Self as the source of all joy, <b>outer simplicity becomes the natural expression of inner fullness</b>.',
      'The life of renunciation is not about hardship but about <b>freedom from attachment</b> to place, person, or outcome.',
      'The sannyasi rests in the knowledge of the Self, <b>unaffected by praise or blame, heat or cold</b>, wandering freely.',
      'The Kaupina Panchakam is often recited by monastics and is a favourite text in Advaita circles for its <b>warmth and lightness</b>, it is sometimes sung.',
    ],
    importantConcepts: [
      '<b>Kaupina:</b> The loincloth worn by a renunciant, symbolizing total renunciation and inner freedom.',
      '<b>Sannyasi:</b> The wandering monk who has renounced all possessions, living on alms and resting in the knowledge of the Self.',
      '<b>Aham Brahmasmi ("I am Brahman"):</b> The meditative affirmation at the heart of the sannyasi\'s realisation.',
      '<b>Sannyasa:</b> The life of renunciation as inner freedom, not mere hardship, outer simplicity flowing from inner fullness.',
    ],
    practicalLessons: [
      'Find contentment in <b>simplicity</b>, be "ever pleased with a beggar\'s morsel."',
      'Cultivate <b>inner fullness</b> so that outer possessions become unnecessary.',
      'Rest in the knowledge of the Self, <b>unaffected by praise or blame</b>, heat or cold.',
      'Chant and meditate on <b>"I am Brahman"</b> as the path to freedom.',
      'Wander through life <b>without attachment</b> to place, person, or outcome.',
    ],
    bestQuotes: [
      { text: 'Blest indeed is the wearer of the loin-cloth, satisfied fully by the Bliss within him, delighting day and night in the bliss of Brahman.', cite: 'Kaupina Panchakam' },
      { text: 'Meditating only on "I am Brahman", living on alms and wandering freely, blest indeed is the wearer of the loin-cloth.', cite: 'Kaupina Panchakam' },
      { text: 'Spurning wealth like a torn piece of cloth, sitting at the foot of a tree for shelter, blest indeed is the wearer of the loin-cloth.', cite: 'Kaupina Panchakam' },
      { text: 'Chanting Brahman, the word of redemption, heedless of outer, of inner, of middle, blest indeed is the wearer of the loin-cloth.', cite: 'Kaupina Panchakam' },
    ],
    finalTakeaway: 'Kaupina Panchakam is a joyful song celebrating the sannyasi\'s life of complete freedom. Through five simple verses, Shankarāchārya shows that when one truly knows the Self as the source of all joy, outer simplicity becomes the natural expression of inner fullness. The life of renunciation is not about hardship, it is about the freedom that comes from resting in the knowledge of the Self.',
    translation: {
      translator: 'Swami Chinmayananda',
      publisher: 'Chinmaya Mission, Mumbai',
      sanskritVerses: [
        'वेदान्तवाक्येषु सदा रमन्तो भिक्षान्नमात्रेण च तुष्टिमन्तः । विशोकमन्तःकरणे चरन्तः कौपीनवन्तः खलु भाग्यवन्तः ॥ १॥',
        'मूलं तरोः केवलमाश्रयन्तः पाणिद्वयं भोक्तुममन्त्रयन्तः । कन्थामिव श्रीमपि कुत्सयन्तः कौपीनवन्तः खलु भाग्यवन्तः ॥ २॥',
        'स्वानन्दभावे परितुष्टिमन्तः सुशान्तसर्वेन्द्रियवृत्तिमन्तः । अहर्निशं ब्रह्मसुखे रमन्तः कौपीनवन्तः खलु भाग्यवन्तः ॥ ३॥',
        'देहादिभावं परिवर्तयन्तः स्वात्मानमात्मन्यवलोकयन्तः । नान्तं न मध्यं न बहिः स्मरन्तः कौपीनवन्तः खलु भाग्यवन्तः ॥ ४॥',
        'ब्रह्माक्षरं पावनमुच्चरन्तो ब्रह्माहमस्मीति विभावयन्तः । भिक्षाशिनो दिक्षु परिभ्रमन्तः कौपीनवन्तः खलु भाग्यवन्तः ॥ ५॥',
      ],
      verses: [
        'Roaming ever in the insights of Vedanta, ever pleased with his beggar\'s morsel, wandering onward, his heart free from sorrow, blest indeed is the wearer of the loin-cloth. (1)',
        'Sitting at the foot of a tree for shelter, eating from his hands his meagre portion, spurning wealth like a torn piece of cloth, blest indeed is the wearer of the loin-cloth. (2)',
        'Satisfied fully by the Bliss within him, curbing wholly the cravings of his senses, delighting day and night in the bliss of Brahman, blest indeed is the wearer of the loin-cloth. (3)',
        'Witnessing the changes of mind and body, naught but the Self within him beholding, heedless of outer, of inner, of middle, blest indeed is the wearer of the loin-cloth. (4)',
        'Chanting Brahman, the word of redemption, meditating only on "I am Brahman", living on alms and wandering freely, blest indeed is the wearer of the loin-cloth. (5)',
      ]
    }
  },
  {
    id: 'drig-drishya-viveka',
    title: 'Drig-Drishya Viveka',
    author: 'Adi Shankarāchārya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    year: 800,
    rating: 4.7,
    summary: 'The Seer and the Seen, a short but powerful text on discriminating the perceiver from the perceived.',
    status: 'coming-soon',
    keyIdeas: [],
    mainTakeaways: [],
    importantConcepts: [],
    practicalLessons: [],
    bestQuotes: [],
    finalTakeaway: ''
  }
];

/* ----- Added dates (recently added first) ----- */
const ADDED_DATES = {
  "art-of-seduction": "2026-08-28",
  "48-laws-of-power": "2026-08-28",
  "kaivalya-upanishad": "2026-08-28",
  "isha-upanishad": "2026-08-28",
  "kathopanishad": "2026-08-28",
  "aparokshanubhuti": "2026-08-24",
  "svarupanusandhanashtakam": "2026-08-20",
  "sadhana-panchakam": "2026-08-16",
  "atomic-habits": "2026-08-12",
  "thinking-fast-and-slow": "2026-08-08",
  "deep-work": "2026-08-04",
  "meditations": "2026-07-31",
  "the-psychology-of-money": "2026-07-27",
  "sapiens": "2026-07-23",
  "the-power-of-now": "2026-07-19",
  "start-with-why": "2026-07-15",
  "mans-search-for-meaning": "2026-07-11",
  "essentialism": "2026-07-07",
  "the-alchemist": "2026-07-03",
  "the-4-hour-workweek": "2026-06-29",
  "grit": "2026-06-25",
  "100-things-successful-people-do": "2026-06-21",
  "vivekachudamani": "2026-06-17",
  "atma-bodha": "2026-06-13",
  "tattva-bodha": "2026-06-09",
  "kaupina-panchakam": "2026-06-05",
  "drig-drishya-viveka": "2026-06-01",
};
BOOKS.forEach(b => { b.added = ADDED_DATES[b.id] || '2026-01-01'; });
BOOKS.sort((a, b) => new Date(b.added) - new Date(a.added));

/* ----- Category metadata ----- */
const CATEGORY_META = {
  Psychology: 'Understand the mind, habits, and behavior, from cognitive bias to lasting change.',
  Business: 'Ideas and frameworks for building, leading, and thinking about work and money.',
  Productivity: 'Do less, better. Focus, essentialism, and the science of getting things done.',
  Philosophy: 'Timeless questions about meaning, virtue, and the art of living well.',
  Science: 'Big ideas from history, biology, and the frontiers of human knowledge.',
  Advaita: 'The non-dual wisdom of Adi Shankarāchārya, the path of self-realization.',
  'Upanishads': 'The ancient Vedantic scriptures, the direct revelations of the seers on the nature of Brahman and the Self.',
};

/* ----- State ----- */
const state = {
  books: BOOKS,
  currentView: 'grid',
  activeCategory: 'all',
  searchQuery: '',
  currentBook: null,
  summaryOpen: false,
  previousRoute: '#/',
  previouslyFocused: null,
};

/* ----- DOM refs ----- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const bookGrid = $('#bookGrid');
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');
const catLinks = $$('.cat-link');
const viewBtns = $$('.view-btn');
const resultCount = $('#resultCount');
const emptyState = $('#emptyState');
const clearFilters = $('#clearFilters');
const toast = $('#toast');
const toTop = $('#toTop');
const summaryView = $('#summaryView');
const summaryScrim = $('#summaryScrim');
const summaryBack = $('#summaryBack');
const summaryClose = $('#summaryClose');
const summaryCover = $('#summaryCover');
const summaryTitle = $('#summaryTitle');
const summaryAuthor = $('#summaryAuthor');
const summaryCategory = $('#summaryCategory');
const summaryBlurb = $('#summaryBlurb');
const factTime = $('#factTime');
const factYear = $('#factYear');
const factRating = $('#factRating');
const summaryAnchors = $('#summaryAnchors');
const summarySections = $('#summarySections');
const summaryProgress = $('#summaryProgress');
const statBooks = $('#statBooks');

/* ----- Toast ----- */
let toastTimer;

function coverError(img, fallbackText) {
  const base = `images/covers/${img.dataset.folder}/${img.dataset.bookId}`;
  if (!img.dataset.triedPng) {
    img.dataset.triedPng = '1';
    img.src = `${base}.png`;
    return;
  }
  img.remove();
  if (fallbackText && img.parentElement) img.parentElement.textContent = fallbackText;
}

function mountCover(container, book, folder, fallbackText) {
  container.textContent = '';
  container.style.background = book.color;
  const img = document.createElement('img');
  img.className = 'cover-img';
  img.alt = '';
  img.dataset.bookId = book.id;
  img.dataset.folder = folder;
  img.onerror = () => coverError(img, fallbackText);
  img.src = `images/covers/${folder}/${book.id}.jpg`;
  container.appendChild(img);
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ----- Render ----- */
function renderBookCard(book) {
  const isComingSoon = book.status === 'coming-soon';
  const card = document.createElement('div');
  card.className = 'book-card' + (isComingSoon ? ' card-coming-soon' : '');
  card.dataset.id = book.id;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', isComingSoon ? `Summary of ${book.title} coming soon` : `Read summary of ${book.title} by ${book.author}`);

  const initials = book.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  const comingSoon = isComingSoon
    ? `<span class="coming-soon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg> Coming soon</span>`
    : '';

  card.innerHTML = `
    <div class="book-cover" style="background:${book.color}">
      <span class="cover-initials">${initials}</span>
        <img src="images/covers/card/${book.id}.jpg" alt="" class="cover-img" data-book-id="${book.id}" data-folder="card" loading="lazy" onerror="coverError(this)">
      ${comingSoon}
    </div>
    <div class="book-body">
      <span class="book-category">${book.category}</span>
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <p class="book-summary">${book.summary}</p>
      <div class="book-meta">
        <span class="chip">${book.readingTime} min</span>
        <span class="added-date">${new Date(book.added + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openSummary(book.id));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSummary(book.id); } });

  return card;
}

function renderLibrary() {
  const filtered = state.books.filter(book => {
    const matchCategory = state.activeCategory === 'all' || book.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const matchSearch = !q || book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q) || book.summary.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  resultCount.textContent = `${filtered.length} title${filtered.length !== 1 ? 's' : ''}`;

  bookGrid.innerHTML = '';
  bookGrid.className = 'book-grid' + (state.currentView === 'list' ? ' list-view' : '');

  if (filtered.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  const frag = document.createDocumentFragment();
  filtered.forEach(book => frag.appendChild(renderBookCard(book)));
  bookGrid.appendChild(frag);
}

/* ----- Summary View ----- */
function trapFocus(e) {
  if (!state.summaryOpen) return;
  const focusable = summaryView.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === first || !summaryView.contains(document.activeElement)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last || !summaryView.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

function openSummary(id) {
  const book = state.books.find(b => b.id === id);
  if (!book) return;
  state.currentBook = book;
  state.summaryOpen = true;
  state.previousRoute = currentHash().startsWith('#/book/') ? '#/' : currentHash();
  state.previouslyFocused = document.activeElement;

  const initials = book.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();

  summaryCover.textContent = '';
  summaryCover.style.background = book.color;
  mountCover(summaryCover, book, 'summary', initials);
  summaryTitle.textContent = book.title;
  summaryAuthor.textContent = book.author;
  summaryCategory.textContent = book.category;
  summaryBlurb.textContent = book.summary;
  factTime.textContent = book.readingTime;
  factYear.textContent = book.year;
  factRating.textContent = book.rating.toFixed(1);

  if (book.status === 'coming-soon') {
    summaryAnchors.innerHTML = '';
    summarySections.innerHTML = `
      <div class="coming-soon-panel">
        <div class="coming-soon-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>
        </div>
        <h2>Summary coming soon</h2>
        <p>The full summary of <strong>${book.title}</strong> is being prepared and will appear here shortly. Check back soon.</p>
      </div>
    `;
  } else {
    // Section icons
    const ICONS = {
      key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"></path></svg>',
      takeaways: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
      concepts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
      lessons: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
      quotes: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>',
      translation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      final: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    };

    // Build anchor nav
    const sections = [
      { id: 'key-ideas', label: 'Key Ideas', icon: 'key' },
      { id: 'takeaways', label: 'Takeaways', icon: 'takeaways' },
      { id: 'concepts', label: book.laws ? 'Laws' : book.chapters ? 'Chapters' : 'Concepts', icon: 'concepts' },
      { id: 'lessons', label: 'Lessons', icon: 'lessons' },
      { id: 'quotes', label: 'Quotes', icon: 'quotes' },
    ];
    if (book.translation) sections.push({ id: 'translation', label: 'Translation', icon: 'translation' });
    sections.push({ id: 'final', label: 'Final', icon: 'final' });

  const toRoman = n => {
    const vals = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    let r = '';
    for (const [v, s] of vals) { while (n >= v) { r += s; n -= v; } }
    return r;
  };

  summaryAnchors.innerHTML = `
    <h3 class="anchors-title">Contents</h3>
    <ol class="anchors-list">
      ${sections.map((s, i) => `
        <li class="anchors-item">
          <a href="#summary-${s.id}" data-section="${s.id}">
            <span class="anchor-icon" aria-hidden="true">${ICONS[s.icon]}</span>
            <span class="anchor-label">${s.label}</span>
            <span class="anchor-leader" aria-hidden="true"></span>
            <span class="anchor-page" aria-hidden="true">${toRoman(i + 1)}</span>
          </a>
        </li>
      `).join('')}
    </ol>
  `;
  const sectionHTML = `
    <section id="summary-key-ideas">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.key}</span> Key Ideas</h2>
        <ul>${book.keyIdeas.map(idea => `<li>${idea}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-takeaways">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.takeaways}</span> Main Takeaways</h2>
        <ul>${book.mainTakeaways.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    </section>
    ${book.laws ? `
    <section id="summary-concepts">
      <div class="section-card laws-card" id="lawsCard">
        <div class="translation-head">
          <h2><span class="section-icon">${ICONS.concepts}</span> The 48 Laws</h2>
          <span class="translation-badge">${book.laws.length} laws</span>
        </div>
        <ol class="laws-list" id="lawsList">
          ${book.laws.map(law => `
            <li class="law">
              <span class="law-num" aria-hidden="true">${law.num}</span>
              <span class="law-text">
                <span class="law-title">${law.title}</span>
                ${law.detail ? `<span class="law-detail">${law.detail}</span>` : ''}
              </span>
            </li>
          `).join('')}
        </ol>
        <button class="translation-toggle" id="lawsToggle" type="button" aria-expanded="false">
          <span class="toggle-label">See all laws</span>
          <span class="toggle-count">(${book.laws.length} laws)</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </section>
    ` : book.chapters ? `
    <section id="summary-concepts">
      <div class="section-card laws-card" id="lawsCard">
        <div class="translation-head">
          <h2><span class="section-icon">${ICONS.concepts}</span> Chapters</h2>
          <span class="translation-badge">${book.chapters.length} chapters</span>
        </div>
        <ol class="laws-list" id="lawsList">
          ${book.chapters.map(ch => `
            <li class="law">
              <span class="law-num" aria-hidden="true">${ch.num}</span>
              <span class="law-text">
                <span class="law-title">${ch.title}</span>
                ${ch.detail ? `<span class="law-detail">${ch.detail}</span>` : ''}
              </span>
            </li>
          `).join('')}
        </ol>
        <button class="translation-toggle" id="lawsToggle" type="button" aria-expanded="false">
          <span class="toggle-label">See all chapters</span>
          <span class="toggle-count">(${book.chapters.length} chapters)</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </section>
    ` : `
    <section id="summary-concepts">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.concepts}</span> Important Concepts</h2>
        <ul>${book.importantConcepts.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
    </section>
    `}
    <section id="summary-lessons">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.lessons}</span> Practical Lessons</h2>
        <ul>${book.practicalLessons.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-quotes">
      <div class="section-card">
        <h2><span class="quote-mark">${ICONS.quotes}</span> Best quotes</h2>
        ${book.bestQuotes.map(q => `
          <div class="quote-block">
            <blockquote>${q.text}</blockquote>
            <cite>${q.cite}</cite>
          </div>
        `).join('')}
      </div>
    </section>
    ${book.translation ? `
    <section id="summary-translation">
      <div class="section-card translation-card" id="translationCard">
        <div class="translation-head">
          <h2><span class="section-icon">${ICONS.translation}</span> Translation</h2>
          <span class="translation-badge">${book.translation.verses.length} verses</span>
        </div>
        <p class="translation-attrib">
          Translated by <strong>${book.translation.translator}</strong>
          <span class="attrib-sep" aria-hidden="true"></span>
          Published by <strong>${book.translation.publisher}</strong>
        </p>
        <ol class="translation-verses" id="translationVerses">
          ${book.translation.verses.map((v, i) => {
            const s = book.translation.sanskritVerses ? book.translation.sanskritVerses[i] || '' : '';
            return `<li class="verse"><span class="verse-num" aria-hidden="true">${i + 1}</span><span class="verse-text">${s ? '<span class="verse-sanskrit">' + s + '</span>' : ''}${v}</span></li>`;
          }).join('')}
        </ol>
        <button class="translation-toggle" id="translationToggle" type="button" aria-expanded="false">
          <span class="toggle-label">See translation</span>
          <span class="toggle-count">(${book.translation.verses.length} verses)</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </section>
    ` : ''}
    <section id="summary-final">
      <div class="final-block">
        <h2>${ICONS.final} Final Takeaway</h2>
        <p>${book.finalTakeaway}</p>
      </div>
    </section>
  `;
  summarySections.innerHTML = sectionHTML;

  // Anchor click tracking
  $$('.summary-anchors a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Laws / Chapters toggle
  const lawsToggle = document.getElementById('lawsToggle');
  if (lawsToggle) {
    const card = document.getElementById('lawsCard');
    const label = lawsToggle.querySelector('.toggle-label');
    const count = lawsToggle.querySelector('.toggle-count');
    const items = book.laws || book.chapters || [];
    const unit = book.laws ? 'laws' : 'chapters';
    lawsToggle.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      if (expanded) {
        label.textContent = 'Hide';
        if (count) count.textContent = '';
      } else {
        label.textContent = 'See all';
        if (count) count.textContent = `(${items.length} ${unit})`;
      }
      lawsToggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // Translation toggle
  const translationToggle = document.getElementById('translationToggle');
  if (translationToggle) {
    const card = document.getElementById('translationCard');
    const label = translationToggle.querySelector('.toggle-label');
    const count = translationToggle.querySelector('.toggle-count');
    translationToggle.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      if (expanded) {
        label.textContent = 'Hide translation';
        if (count) count.textContent = '';
      } else {
        label.textContent = 'See translation';
        if (count) count.textContent = `(${book.translation.verses.length} verses)`;
      }
      translationToggle.setAttribute('aria-expanded', String(expanded));
    });
  }
  }

  // Show
  document.body.style.overflow = 'hidden';
  summaryView.scrollTop = 0;
  summaryScrim.hidden = false;
  summaryView.classList.add('open');
  requestAnimationFrame(() => {
    summaryScrim.classList.add('open');
    summaryView.focus();
    document.addEventListener('keydown', trapFocus);
    const mainEl = document.getElementById('main');
    if (mainEl) {
      mainEl.setAttribute('inert', '');
      mainEl.setAttribute('aria-hidden', 'true');
    }
  });

  updateSummaryProgress();
  setHash('#/book/' + encodeURIComponent(id));
}

function closeSummary(updateHash) {
  if (updateHash === undefined) updateHash = true;
  state.summaryOpen = false;
  summaryView.classList.remove('open');
  summaryScrim.classList.remove('open');
  summaryScrim.hidden = true;
  document.body.style.overflow = '';
  state.currentBook = null;
  summaryView.scrollTop = 0;
  toTop.classList.remove('show');
  document.removeEventListener('keydown', trapFocus);
  const mainEl = document.getElementById('main');
  if (mainEl) {
    mainEl.removeAttribute('inert');
    mainEl.removeAttribute('aria-hidden');
  }
  if (state.previouslyFocused && typeof state.previouslyFocused.focus === 'function') {
    state.previouslyFocused.focus();
  }
  if (updateHash && currentHash().startsWith('#/book/')) {
    setHash(state.previousRoute || '#/');
  }
}

function updateSummaryProgress() {
  const el = summaryView;
  const scrollTop = el.scrollTop;
  const scrollHeight = el.scrollHeight - el.clientHeight;
  const pct = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight * 100, 100) : 0;
  summaryProgress.style.width = pct + '%';
}

/* ----- Search ----- */
let searchDebounce;

function handleSearch() {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    state.searchQuery = searchInput.value.trim();
    searchClear.hidden = !state.searchQuery;
    renderLibrary();
  }, 200);
}

searchInput.addEventListener('input', handleSearch);
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.hidden = true;
  state.searchQuery = '';
  renderLibrary();
  searchInput.focus();
});

const searchForm = document.querySelector('.search-wrap');
if (searchForm) {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    clearTimeout(searchDebounce);
    state.searchQuery = searchInput.value.trim();
    searchClear.hidden = !state.searchQuery;
    renderLibrary();
  });
}

/* ----- Routing ----- */
function currentHash() { return location.hash || '#/'; }

function setHash(h) {
  if (location.hash !== h) location.hash = h;
}

function updateCatLinksActive() {
  $$('.cat-link').forEach(b => b.classList.toggle('active', b.dataset.filter === state.activeCategory));
}

function showHomeView() {
  state.activeCategory = 'all';
  updateCatLinksActive();
  const hero = document.querySelector('.hero');
  if (hero) hero.style.display = '';
  document.getElementById('categoryBanner').hidden = true;
  const title = document.getElementById('libraryTitle');
  title.textContent = 'The library';
  title.hidden = false;
  renderLibrary();
}

function showCategoryView(cat) {
  const exists = state.books.some(b => b.category === cat);
  if (!exists) { showHomeView(); return; }
  state.activeCategory = cat;
  updateCatLinksActive();
  const hero = document.querySelector('.hero');
  if (hero) hero.style.display = 'none';
  const banner = document.getElementById('categoryBanner');
  banner.hidden = false;
  document.getElementById('categoryTitle').textContent = cat;
  document.getElementById('categoryDesc').textContent = CATEGORY_META[cat] || 'Browse all summaries in this category.';
  const count = state.books.filter(b => b.category === cat).length;
  document.getElementById('categoryCount').textContent = `${count} ${count === 1 ? 'book' : 'books'}`;
  document.getElementById('libraryTitle').hidden = true;
  renderLibrary();
  window.scrollTo({ top: 0 });
}

function renderRoute() {
  const hash = currentHash();
  const bookMatch = hash.match(/^#\/book\/(.+)$/);
  if (bookMatch) {
    const id = decodeURIComponent(bookMatch[1]);
    if (!state.books.some(b => b.id === id)) { showHomeView(); return; }
    const alreadyOpen = state.summaryOpen && state.currentBook && state.currentBook.id === id;
    if (!alreadyOpen) {
      if (currentHash().startsWith('#/book/') && hash !== '#/book/' + id) {
        // switching books directly
      }
      openSummary(id);
    }
    return;
  }
  if (state.summaryOpen) closeSummary(false);
  const catMatch = hash.match(/^#\/category\/(.+)$/);
  if (catMatch) {
    showCategoryView(decodeURIComponent(catMatch[1]));
  } else {
    showHomeView();
  }
}

/* ----- Category ----- */
function bindCategory(btn) {
  btn.addEventListener('click', () => {
    closeMobileNav();
    const filter = btn.dataset.filter;
    if (filter === 'all') setHash('#/');
    else setHash('#/category/' + encodeURIComponent(filter));
  });
}
catLinks.forEach(bindCategory);

/* ----- More dropdown ----- */
const moreBtn = $('#moreBtn');
const moreMenu = $('#moreMenu');
const moreDropdown = moreBtn.closest('.more-dropdown');
if (moreBtn && moreMenu) {
  const openMore = () => {
    moreDropdown.classList.add('open');
    moreBtn.setAttribute('aria-expanded', 'true');
  };
  const closeMore = () => {
    moreDropdown.classList.remove('open');
    moreBtn.setAttribute('aria-expanded', 'false');
  };
  moreBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (moreDropdown.classList.contains('open')) closeMore();
    else openMore();
  });
  if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
    moreDropdown.addEventListener('mouseenter', openMore);
    moreDropdown.addEventListener('mouseleave', closeMore);
  }
  document.addEventListener('click', e => {
    if (moreDropdown.classList.contains('open') && !e.target.closest('.more-dropdown')) closeMore();
  });
  moreMenu.querySelectorAll('.cat-link').forEach(btn => {
    btn.addEventListener('click', closeMore);
  });
}

/* ----- Mobile nav ----- */
const menuBtn = $('#menuBtn');
const mobileNav = $('#mobileNav');

function setupMobileNav() {
  const categories = [...new Set(state.books.map(b => b.category))];
  const filters = ['all', ...categories];
  mobileNav.innerHTML = `
    <button class="mobile-close" type="button" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    ${filters.map(f => {
      const label = f === 'all' ? 'All' : f;
      return `<button class="cat-link ${f === state.activeCategory ? 'active' : ''}" data-filter="${f}">${label}</button>`;
    }).join('')}
  `;
  $$('.mobile-nav .cat-link').forEach(bindCategory);
  const closeBtn = $('.mobile-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
}

function toggleMobileNav(force) {
  const open = typeof force === 'boolean' ? force : !mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

function closeMobileNav() {
  toggleMobileNav(false);
}

menuBtn.addEventListener('click', () => toggleMobileNav());
document.addEventListener('click', e => {
  if (mobileNav.classList.contains('open') && !e.target.closest('#mobileNav') && !e.target.closest('#menuBtn')) {
    closeMobileNav();
  }
});

/* ----- View toggle ----- */
viewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    viewBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentView = btn.dataset.view;
    renderLibrary();
  });
});

/* ----- Clear filters ----- */
clearFilters.addEventListener('click', () => {
  searchInput.value = '';
  state.searchQuery = '';
  searchClear.hidden = true;
  state.activeCategory = 'all';
  $$('.cat-link').forEach(b => b.classList.remove('active'));
  $$('.cat-link[data-filter="all"]').forEach(b => b.classList.add('active'));
  renderLibrary();
});

/* ----- Scroll ----- */
function handleScroll() {
  const isScrolled = state.summaryOpen ? summaryView.scrollTop > 400 : window.scrollY > 400;
  toTop.classList.toggle('show', isScrolled);
  if (state.summaryOpen) {
    updateSummaryProgress();
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
summaryView.addEventListener('scroll', handleScroll, { passive: true });
toTop.addEventListener('click', () => {
  if (state.summaryOpen) {
    summaryView.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

/* ----- Summary events ----- */
summaryBack.addEventListener('click', closeSummary);
summaryClose.addEventListener('click', closeSummary);
summaryScrim.addEventListener('click', closeSummary);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && state.summaryOpen) closeSummary();
  else if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMobileNav();
});

/* ----- Theme ----- */
const themeToggle = document.getElementById('themeToggle');

function getTheme() {
  return localStorage.getItem('ultra-theme') || 'light';
}

function setTheme(theme, persist = true) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  if (persist) localStorage.setItem('ultra-theme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

/* ----- Font size ----- */
const fontMinus = document.getElementById('fontMinus');
const fontPlus = document.getElementById('fontPlus');
const FS_KEY = 'ultra-font-scale';
const MIN_FS = 0.8, MAX_FS = 1.5, FS_STEP = 0.1;

function getFontScale() {
  return parseFloat(localStorage.getItem(FS_KEY)) || 1;
}

function applyFontScale(scale) {
  summaryView.style.setProperty('--fs', scale.toFixed(1));
  const pct = Math.round(scale * 100);
  if (fontMinus) {
    fontMinus.disabled = scale <= MIN_FS;
    fontMinus.setAttribute('aria-label', `Decrease text size (currently ${pct}%)`);
  }
  if (fontPlus) {
    fontPlus.disabled = scale >= MAX_FS;
    fontPlus.setAttribute('aria-label', `Increase text size (currently ${pct}%)`);
  }
}

function setFontScale(scale) {
  const clamped = Math.min(MAX_FS, Math.max(MIN_FS, Math.round(scale * 10) / 10));
  localStorage.setItem(FS_KEY, clamped);
  applyFontScale(clamped);
}

if (fontMinus) fontMinus.addEventListener('click', () => setFontScale(getFontScale() - FS_STEP));
if (fontPlus) fontPlus.addEventListener('click', () => setFontScale(getFontScale() + FS_STEP));

/* ----- Init ----- */
statBooks.textContent = state.books.length;
const heroBookCount = document.getElementById('heroBookCount');
if (heroBookCount) heroBookCount.textContent = state.books.length;
setupMobileNav();
setTheme(getTheme(), false);
applyFontScale(getFontScale());
renderRoute();
window.addEventListener('hashchange', renderRoute);

/* ----- Summary scroll tracking ----- */
summaryView.addEventListener('scroll', updateSummaryProgress, { passive: true });