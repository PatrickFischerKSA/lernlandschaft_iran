const MODULES = [
  {
    id: "perserreich",
    step: "1",
    title: "Perserreich, Monarchie und geopolitische Lage",
    era: "Antike bis 1941",
    intro:
      "Diese Auftaktstation zeigt Iran nicht nur als aktuellen Krisenraum, sondern als historischen Kultur- und Machtbereich zwischen Mesopotamien, Zentralasien, Kaukasus und Indischem Ozean. Sie führt vom Perserreich über Islamisierung und schiitische Prägung bis zu Reza Schah.",
    goal:
      "Du kannst erklären, warum Iran historisch, kulturell und geopolitisch weit mehr ist als nur ein aktueller Konfliktherd.",
    route:
      "Starte mit dem Terra-X-Überblick, sichere dann mit der ARTE-Playlist die großen Linien und nutze den bpb-Text als Brücke zur Moderne. Bearbeite zuerst Kultur und Raumlage, dann Monarchie und frühe Modernisierung.",
    teacherNote:
      "Wichtig ist, Iran nicht vorschnell auf Islamische Republik, Atomfrage oder Nahostkrieg zu verkürzen. Die Lernenden sollen zuerst kulturelle Tiefenlinien und die lange Machtgeschichte verstehen.",
    teacherToolkit: {
      duration: "35 bis 45 Minuten",
      socialForms: [
        "Einzelarbeit mit kurzer Sicherung im Tandem",
        "Raum- und Kulturbegriffe gemeinsam clustern",
        "Transferfrage als schriftlicher Kurzkommentar"
      ],
      assessmentFocus: [
        "Iran nicht mit der arabischen Welt gleichsetzen",
        "historische Tiefe und aktuelle Bedeutung verbinden",
        "Raumlage, Religion und politische Ordnung auseinanderhalten"
      ],
      misconceptions: [
        "Iran sei historisch erst seit 1979 relevant",
        "Iran sei einfach ein arabischer Staat",
        "Geopolitik erkläre Iran vollständig ohne Kulturgeschichte"
      ],
      product:
        "Begriffsnetz zu Kultur, Raumlage und Machtgeschichte oder ein begründeter Kurztext zur Bedeutung Irans.",
      extension:
        "Aktuelle Karten oder Meldungen zur Straße von Hormus ergänzen und mit historischen Raumvorstellungen verbinden."
    },
    visual: {
      src: "https://i.ytimg.com/vi/6FlPHpCEwL8/hqdefault.jpg",
      alt: "Vorschaubild zum Überblicksvideo über Iran"
    },
    miniQuestions: [
      {
        id: "mq-perserreich-1",
        title: "Mehr als Gegenwartskrise",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist es verkürzt, Iran nur über aktuelle Konflikte zu definieren?",
        help:
          "Nenne mindestens zwei Ebenen: Geschichte, Kultur, Religion oder Geopolitik.",
        placeholder: "Es ist verkürzt, weil ...",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-arte-playlist"],
        conceptGroups: [
          {
            label: "lange Geschichte oder Perserreich",
            variants: ["perserreich", "lange geschichte", "antike", "jahrtausende", "historische tiefe"]
          },
          {
            label: "eigene Kultur oder persische Identität",
            variants: ["persisch", "eigene kultur", "sprache", "identität", "kulturraum"]
          },
          {
            label: "geopolitische Lage oder Regionalmacht",
            variants: ["geopolitik", "regionalmacht", "raumlage", "hormus", "zwischen ost und west", "golf"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Iran nur über aktuelle Konflikte zu definieren ist verkürzt, weil das Land eine jahrtausendealte Geschichte, eine eigenständige persische Kultur und eine zentrale geopolitische Lage zwischen mehreren Weltregionen hat."
      },
      {
        id: "mq-perserreich-2",
        title: "Iran ist nicht arabisch",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist Iran trotz islamischer Prägung nicht einfach als arabischer Staat zu beschreiben?",
        help:
          "Verbinde Sprache, Kulturgeschichte und konfessionelle Prägung.",
        placeholder: "Iran ist nicht einfach arabisch, weil ...",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-arte-playlist"],
        conceptGroups: [
          {
            label: "persische Sprache oder Kultur",
            variants: ["persisch", "farsi", "eigene sprache", "eigene kultur", "persische kultur"]
          },
          {
            label: "vorislamische Geschichte",
            variants: ["vorislamisch", "perserreich", "antike", "älter als der islam", "alte monarchie"]
          },
          {
            label: "schiitische Besonderheit",
            variants: ["schiitisch", "schia", "schiitische prägung", "eigene religiöse tradition"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Iran ist nicht einfach arabisch, weil das Land persischsprachig ist, auf eine vorislamische Geschichte zurückgreift und religiös vor allem schiitisch geprägt ist."
      },
      {
        id: "mq-perserreich-3",
        title: "Schia als Staatsprägung",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist die schiitische Prägung Irans politisch wichtiger als ein bloßes Religionsetikett?",
        help:
          "Verbinde Staat, Identität und Stellung in der Region.",
        placeholder: "Die schiitische Prägung ist politisch wichtig, weil ...",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-arte-playlist", "r-perserreich-bpb"],
        conceptGroups: [
          {
            label: "prägt staatliche oder historische Identität",
            variants: ["identität", "staat", "staatsprägend", "historisch", "eigenständigkeit", "tradition"]
          },
          {
            label: "unterscheidet Iran von vielen Nachbarn",
            variants: ["nachbarn", "abgrenzung", "eigenständig", "region", "nicht sunnitisch", "anders"]
          },
          {
            label: "wirkt in Politik oder Geopolitik hinein",
            variants: ["politik", "geopolitik", "regional", "macht", "allianzen", "konflikte"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die schiitische Prägung ist politisch wichtig, weil sie Irans historische und staatliche Identität mitformt, das Land von vielen Nachbarn unterscheidet und bis heute in regionale Macht- und Konfliktlagen hineinwirkt."
      }
    ],
    resources: [
      {
        id: "r-perserreich-terrax",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Iran - Perserreich, Islamische Revolution, Konflikt mit Israel",
        focus:
          "Großer Überblick zu historischen Tiefenlinien, Revolution, Religion und Konfliktlage.",
        link: "https://www.youtube.com/watch?v=6FlPHpCEwL8",
        tags: ["YouTube", "Pflicht", "Überblick"],
        selectionNote:
          "Das Video eignet sich als Einstieg, weil es Iran nicht nur gegenwartsbezogen, sondern historisch und geopolitisch rahmt.",
        didacticUse:
          "Zuerst einsetzen, damit spätere Stationen nicht ohne historischen Horizont gelesen werden."
      },
      {
        id: "r-perserreich-arte-playlist",
        bucket: "Zusatzquellen: Kontext und Erweiterung",
        type: "Video",
        title: "Krieg im Iran: Aktuelles & Geschichte | ARTE - YouTube",
        focus:
          "Playlist mit historischen und aktuellen Beiträgen zu Iran als Ergänzung und Vertiefung.",
        link: "https://www.youtube.com/playlist?list=PLlQWnS27jXh_n-o-_NUrqM9bqHjdc03K2",
        tags: ["YouTube", "ARTE", "Playlist"],
        selectionNote:
          "Wichtig für wiederholendes Arbeiten und spätere tagesaktuelle Erweiterungen.",
        didacticUse:
          "Einzelne Beiträge zur Differenzierung oder für Anschlussaufträge nutzen."
      },
      {
        id: "r-perserreich-bpb",
        bucket: "Zusatzquellen: Kontext und Erweiterung",
        type: "Website",
        title: "bpb: Die Geschichte Irans 1941 bis 2020",
        focus:
          "Chronologischer Überblick zur modernen iranischen Geschichte mit Stationen von der Besatzung 1941 bis 2020.",
        link: "https://www.bpb.de/themen/naher-mittlerer-osten/iran/40220/die-geschichte-irans-1941-bis-2020/",
        tags: ["bpb", "Chronologie"],
        selectionNote:
          "Die Quelle beginnt erst 1941, ist aber wichtig als Brücke von der älteren Geschichte in die Moderne.",
        didacticUse:
          "Vor allem für den Übergang zur nächsten Station geeignet."
      }
    ],
    questions: [
      {
        id: "q-perserreich-1",
        type: "short-text",
        challenge: "Grundlage",
        prompt:
          "Warum ist das alte Perserreich für das historische Selbstverständnis Irans bis heute wichtig?",
        help:
          "Verbinde historische Größe, kulturelle Erinnerung und politische Symbolik.",
        placeholder: "Das Perserreich ist wichtig, weil ...",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-arte-playlist"],
        conceptGroups: [
          {
            label: "Erinnerung an frühe Großmacht",
            variants: ["großmacht", "mächtiges reich", "imperium", "historische größe", "alte macht"]
          },
          {
            label: "kulturelle Identität oder Kontinuität",
            variants: ["identität", "kulturelle kontinuität", "selbstverständnis", "stolz", "tradition"]
          },
          {
            label: "Symbolik für Gegenwartspolitik",
            variants: ["symbol", "legitimation", "gegenwart", "politische symbolik", "historische referenz"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Das Perserreich ist bis heute wichtig, weil es für historische Größe, kulturelle Kontinuität und ein starkes Selbstverständnis als eigenständiger Macht- und Kulturraum steht."
      },
      {
        id: "q-perserreich-2",
        type: "short-text",
        challenge: "Raumanalyse",
        prompt:
          "Warum macht die Lage Irans das Land geopolitisch besonders bedeutsam?",
        help:
          "Nenne mindestens zwei Räume oder Interessenlagen.",
        placeholder: "Iran ist geopolitisch bedeutsam, weil ...",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-arte-playlist"],
        conceptGroups: [
          {
            label: "Verbindung zwischen mehreren Weltregionen",
            variants: ["nahost", "kaukasus", "zentralasien", "indischer ozean", "zwischen mehreren räumen"]
          },
          {
            label: "Energie, Öl oder Gas",
            variants: ["öl", "gas", "energie", "ressourcen", "rohstoffe"]
          },
          {
            label: "Straße von Hormus oder Verkehrswege",
            variants: ["hormus", "seewege", "handelswege", "meerzugang", "golf"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Iran ist geopolitisch bedeutsam, weil das Land mehrere Großräume verbindet, über wichtige Energiequellen verfügt und mit der Straße von Hormus einen Schlüsselraum für globale Handels- und Ölwege mitprägt."
      },
      {
        id: "q-perserreich-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die großen Entwicklungsschritte von der antiken Machtstellung bis zur frühen Pahlavi-Monarchie.",
        help:
          "Beginne mit dem antiken Großreich und ende mit dem Ende von Reza Schahs Herrschaft unter Besatzungsdruck.",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-bpb"],
        items: [
          {
            id: "achaemenid",
            label: "Das antike Perserreich steigt zu einem Großreich auf.",
            detail: "Iran wird zum historischen Bezugspunkt eines frühen Imperiums."
          },
          {
            id: "arab-conquest",
            label: "Mit der arabisch-islamischen Expansion verändert sich der religiöse und politische Rahmen des Landes.",
            detail: "Islam wird prägend, ältere Traditionen verschwinden aber nicht vollständig."
          },
          {
            id: "safavid",
            label: "Unter den Safawiden wird der schiitische Islam staatsprägend.",
            detail: "Diese Entscheidung wirkt bis in die Gegenwart nach."
          },
          {
            id: "pahlavi-1925",
            label: "Mit Reza Schah beginnt eine neue Monarchie der Pahlavi-Dynastie.",
            detail: "Staatliche Modernisierung und Zentralisierung treten stärker in den Vordergrund."
          },
          {
            id: "occupation-1941",
            label: "Unter dem Druck britischer und sowjetischer Besatzung endet Reza Schahs Herrschaft.",
            detail: "Damit beginnt die moderne Konfliktgeschichte der nächsten Station."
          }
        ],
        correctOrder: ["achaemenid", "arab-conquest", "safavid", "pahlavi-1925", "occupation-1941"],
        explanation:
          "Die Reihenfolge zeigt, dass Irans Gegenwart nicht erst mit der Islamischen Republik verständlich wird. Kulturelle Tiefenlinien, religiöse Prägung und moderne Staatsbildung greifen ineinander."
      },
      {
        id: "q-perserreich-4",
        type: "short-text",
        challenge: "Herrschaftsanalyse",
        prompt:
          "Was wollte Reza Schah mit seiner Modernisierung erreichen, und was war daran zugleich problematisch?",
        help:
          "Verbinde Zentralisierung und Fortschrittsanspruch mit Herrschaft von oben.",
        placeholder: "Reza Schah wollte ... Problematisch war ...",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-bpb"],
        conceptGroups: [
          {
            label: "Modernisierung oder Staatsaufbau",
            variants: ["modernisierung", "staat aufbauen", "zentralisierung", "reformen", "modern"]
          },
          {
            label: "autoritäre Herrschaft",
            variants: ["autoritär", "von oben", "zwang", "wenig mitbestimmung", "diktatorisch"]
          },
          {
            label: "Spannung zwischen Tradition und Reform",
            variants: ["tradition", "widerstand", "konflikt", "gesellschaftlicher widerspruch", "brüche"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Reza Schah wollte Iran modernisieren, den Staat zentralisieren und international handlungsfähiger machen. Problematisch war, dass diese Reformen autoritär von oben durchgesetzt wurden und gesellschaftliche Spannungen verschärften."
      },
      {
        id: "q-perserreich-5",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Begründe, warum man Iran historisch nur versteht, wenn man Kulturgeschichte und Geopolitik zusammen betrachtet.",
        help:
          "Eine starke Antwort verbindet historische Tiefenlinien, religiöse Prägung, Raumlage und heutige Konflikte.",
        placeholder: "Iran lässt sich nur verstehen, wenn ...",
        teacherPrompt:
          "Achte darauf, dass die Lernenden weder in reinem Kulturdeterminismus noch in bloßer Machtpolitik stecken bleiben.",
        commonPitfall:
          "Häufig wird entweder nur das Perserreich oder nur die Gegenwartspolitik genannt. Historisch relevant ist die Verbindung beider Ebenen.",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-arte-playlist", "r-perserreich-bpb"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: ["perserreich", "schia", "hormus", "monarchie", "identität", "regionalmacht"],
        rubric: [
          { concept: "historische Tiefenlinie", keywords: ["perserreich", "lange geschichte", "historisch", "tradition", "kontinuität"] },
          { concept: "kulturelle oder religiöse Eigenständigkeit", keywords: ["persisch", "identität", "schia", "sprache", "kultur"] },
          { concept: "geopolitische Lage", keywords: ["hormus", "energie", "regionalmacht", "nahost", "raumlage"] },
          { concept: "Verbindung von Vergangenheit und Gegenwart", keywords: ["heute", "gegenwart", "wirkt nach", "bis heute", "aktuell"] },
          { concept: "historisches Urteil", keywords: ["insgesamt", "entscheidend", "deshalb", "ich bewerte", "zentral"] }
        ],
        modelAnswer:
          "Iran lässt sich nur verstehen, wenn Kulturgeschichte und Geopolitik zusammengedacht werden. Das Land beruft sich auf eine lange persische Tradition, ist religiös eigenständig geprägt und liegt zugleich an einem strategischen Schlüsselraum. Erst diese Verbindung erklärt, warum Iran innenpolitisch identitätsstark und außenpolitisch so wirkmächtig ist."
      },
      {
        id: "q-perserreich-6",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum führen vorschnelle Gleichsetzungen wie 'Iran ist einfach Nahost' oder 'Iran ist einfach islamisch' oft zu Fehlurteilen?",
        help:
          "Verbinde Raumlage, Kulturgeschichte und religiöse Eigenprägung.",
        placeholder: "Die Gleichsetzungen führen zu Fehlurteilen, weil ...",
        sourceIds: ["r-perserreich-terrax", "r-perserreich-arte-playlist", "r-perserreich-bpb"],
        conceptGroups: [
          {
            label: "Iran hat eine eigenständige persische Geschichte",
            variants: ["persisch", "eigenständige geschichte", "perserreich", "kulturraum", "identität", "lange geschichte"]
          },
          {
            label: "Iran liegt zwischen mehreren Großräumen",
            variants: ["zwischen mehreren räumen", "nahost", "zentralasien", "kaukasus", "indischer ozean", "raumlage"]
          },
          {
            label: "Religion erklärt Iran nicht allein",
            variants: ["nicht nur religion", "schia", "politik", "geopolitik", "staat", "mehrdimensional"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Gleichsetzungen führen zu Fehlurteilen, weil Iran eine eigenständige persische Geschichte und Kultur hat, zwischen mehreren Großräumen liegt und politisch nicht allein über Religion erklärt werden kann."
      }
    ]
  },
  {
    id: "mossadegh",
    step: "2",
    title: "Mossadegh, Öl und Staatsstreich",
    era: "1941 bis 1953",
    intro:
      "Diese Station behandelt die Besatzung Irans im Zweiten Weltkrieg, den Aufstieg Mohammad Mossadeghs, die Verstaatlichung der Ölindustrie und den Staatsstreich von 1953. Im Zentrum steht die Frage, wie eng Innenpolitik, Rohstoffe und ausländische Interessen verbunden waren.",
    goal:
      "Du kannst erklären, warum Mossadegh bis heute für Souveränität, Demokratiehoffnung und das Misstrauen gegenüber westlicher Einflussnahme steht.",
    route:
      "Starte mit dem ZDF-Video zur langen Konfliktgeschichte mit den USA, sichere dann zentrale Daten mit dem bpb-Text und nutze den Terra-X-Überblick für den größeren Zusammenhang. Arbeite zuerst Machtwechsel und Öl, dann den Putsch und seine Folgen.",
    teacherNote:
      "Didaktisch zentral ist hier die Verbindung von Demokratiegeschichte und Geopolitik. Die Lernenden sollen den Putsch nicht isoliert, sondern im Zusammenhang von Ölinteressen, Kaltem Krieg und Monarchie verstehen.",
    teacherToolkit: {
      duration: "40 bis 50 Minuten",
      socialForms: [
        "Einzelarbeit mit Chronologiesicherung",
        "Partnergespräch zur Frage nach Souveränität und Intervention",
        "Transferfrage als kurzer Urteilstext"
      ],
      assessmentFocus: [
        "Mossadegh nicht nur als Person, sondern als Symbolfigur begreifen",
        "Ölpolitik und Geopolitik zusammendenken",
        "Folgen des Putsches für spätere Iran-USA-Beziehungen erkennen"
      ],
      misconceptions: [
        "Der Staatsstreich sei nur ein inneriranischer Machtwechsel gewesen",
        "Es habe nur um Ideologie, nicht um Öl und Macht gegangen",
        "1953 habe keine Langzeitfolgen mehr für die Gegenwart"
      ],
      product:
        "Kurzer Deutungstext dazu, was der Putsch von 1953 über Iran, Öl und ausländische Interessen zeigt.",
      extension:
        "Aktuelle Debatten über Souveränität oder Sanktionen mit 1953 in Beziehung setzen."
    },
    visual: {
      src: "https://i.ytimg.com/vi/rIsOLuvXM7I/hqdefault.jpg",
      alt: "Vorschaubild zum ZDF-Video Iran und USA"
    },
    visualDossierTitle: "Bilder von Souveränität, Öl und Intervention",
    visualDossierIntro:
      "Diese Bildsektion hält die Station bewusst an zwei Polen fest: Mossadegh als Symbolfigur nationaler Selbstbestimmung und der Konflikt mit westlicher Einflussnahme als länger wirkende politische Erinnerung.",
    visualDossier: [
      {
        src:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Portrait_of_Mohammad_Mosaddegh_-_circa_1952.jpg",
        alt: "Mohammad Mossadegh im Porträt",
        title: "Mossadegh als Erinnerungsfigur",
        caption:
          "Porträt Mohammad Mossadeghs als Bezugspunkt für Verstaatlichung, Parlamentarismus und nationale Souveränität.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild hilft, die Station nicht nur als Ölkonflikt, sondern auch als Demokratie- und Symbolgeschichte zu lesen.",
        imageFit: "cover",
        imagePosition: "center top"
      },
      {
        src: "https://i.ytimg.com/vi/rIsOLuvXM7I/hqdefault.jpg",
        alt: "Vorschaubild zum Video über die Konfliktgeschichte zwischen Iran und den USA",
        title: "Der Konflikt reicht weiter zurück",
        caption:
          "Das Video führt den Blick weg von einer reinen Gegenwartswahrnehmung und zurück zur Vorgeschichte der Spannungen zwischen Iran und den USA.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert den Schritt von der Einzelperson zur langen Konfliktlinie."
      }
    ],
    actorFocus: {
      title: "Schlüsselfigur dieser Station",
      intro:
        "Mossadegh steht in dieser Station nicht nur als Politiker, sondern als Erinnerungsfigur für Souveränität, parlamentarische Legitimität und den Konflikt zwischen nationaler Selbstbestimmung und ausländischer Einflussnahme."
    },
    actors: [
      {
        name: "Mohammad Mossadegh",
        role: "Ministerpräsident und Symbolfigur nationaler Souveränität",
        lens:
          "An Mossadegh lassen sich Ölpolitik, parlamentarischer Anspruch, antikoloniale Deutung und die Langzeitwirkung des Putsches zugleich zeigen.",
        whyHere:
          "Für diese Station ist er zentral, weil sich an seiner Person die Verbindung von Demokratiehoffnung, Ressourcenpolitik und geopolitischer Intervention besonders gut nachvollziehen lässt.",
        imageSrc:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Portrait_of_Mohammad_Mosaddegh_-_circa_1952.jpg",
        imageAlt: "Mohammad Mossadegh im Porträt",
        imageFit: "cover",
        imagePosition: "center top"
      }
    ],
    miniQuestions: [
      {
        id: "mq-mossadegh-1",
        title: "Öl und Souveränität",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum wurde die Verstaatlichung des iranischen Öls unter Mossadegh zu einer Symbolfrage nationaler Souveränität?",
        help:
          "Verbinde Rohstoffe, ausländische Kontrolle und Selbstbestimmung.",
        placeholder: "Die Verstaatlichung war eine Symbolfrage, weil ...",
        sourceIds: ["r-mossadegh-zdf", "r-mossadegh-bpb"],
        conceptGroups: [
          {
            label: "Öl war wirtschaftlich zentral",
            variants: ["öl", "rohstoff", "wirtschaft", "einnahmen", "ressourcen"]
          },
          {
            label: "ausländische Kontrolle sollte beendet werden",
            variants: ["britisch", "ausländische kontrolle", "anglo iranian", "fremde interessen", "fremdbestimmung"]
          },
          {
            label: "nationale Selbstbestimmung",
            variants: ["souveränität", "selbstbestimmung", "unabhängigkeit", "eigenständig", "nationale würde"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Verstaatlichung war eine Symbolfrage, weil Öl wirtschaftlich zentral war, ausländische Kontrolle zurückgedrängt werden sollte und Iran damit politische Selbstbestimmung über die eigenen Ressourcen beanspruchte."
      },
      {
        id: "mq-mossadegh-2",
        title: "Warum 1953 wichtig bleibt",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist der Putsch von 1953 bis heute ein Schlüsselereignis im Verhältnis Irans zum Westen?",
        help:
          "Nenne Intervention und Vertrauensverlust.",
        placeholder: "1953 bleibt wichtig, weil ...",
        sourceIds: ["r-mossadegh-zdf", "r-mossadegh-bpb", "r-mossadegh-terrax"],
        conceptGroups: [
          {
            label: "westliche oder CIA-unterstützte Intervention",
            variants: ["cia", "westen", "ausländische intervention", "geheimdienst", "usa", "britannien"]
          },
          {
            label: "Sturz einer demokratisch legitimierten Regierung",
            variants: ["demokratisch", "gewählte regierung", "mossadegh gestürzt", "regierungssturz", "legitimiert"]
          },
          {
            label: "anhaltendes Misstrauen",
            variants: ["misstrauen", "vertrauensverlust", "bis heute", "langzeitfolge", "verletzung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "1953 bleibt wichtig, weil westliche Akteure den Sturz Mossadeghs unterstützten, damit eine demokratisch legitimierte Regierung beseitigt wurde und daraus ein bis heute wirksames Misstrauen gegenüber dem Westen entstand."
      },
      {
        id: "mq-mossadegh-3",
        title: "Innenkonflikt und Außenintervention",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum greift es zu kurz, den Sturz Mossadeghs nur als ausländischen Eingriff oder nur als inneriranischen Machtkampf zu beschreiben?",
        help:
          "Verbinde Monarchie, Elitenkonflikt, Geheimdienste und Ölinteressen.",
        placeholder: "Es greift zu kurz, weil ...",
        sourceIds: ["r-mossadegh-bpb", "r-mossadegh-zdf", "r-mossadegh-terrax"],
        conceptGroups: [
          {
            label: "inneriranische Machtkonflikte spielten mit hinein",
            variants: ["schah", "eliten", "innenpolitik", "machtkampf", "monarchie", "konservative kräfte"]
          },
          {
            label: "ausländische Intervention war zentral",
            variants: ["cia", "britannien", "ausländische intervention", "geheimdienst", "westen", "einmischung"]
          },
          {
            label: "Öl und Geopolitik verbanden beide Ebenen",
            variants: ["öl", "geopolitik", "interessen", "ressourcen", "kalter krieg", "souveränität"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Es greift zu kurz, weil im Iran selbst Machtkämpfe um Monarchie und Parlament liefen, der Sturz aber zugleich massiv von ausländischen Interessen und Interventionen mitgeprägt wurde. Gerade Öl und Geopolitik verbanden beide Ebenen."
      }
    ],
    resources: [
      {
        id: "r-mossadegh-zdf",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Iran & USA: Die Geschichte eines langen Konflikts",
        focus:
          "Lange Konfliktlinie zwischen Iran und den USA mit starkem Bezug auf Mossadegh, Putsch und Nachwirkungen.",
        link: "https://www.youtube.com/watch?v=rIsOLuvXM7I",
        tags: ["YouTube", "Pflicht", "ZDFheute"],
        selectionNote:
          "Besonders passend, weil der Film die Geschichte der Spannungen nicht erst 1979 beginnen lässt.",
        didacticUse:
          "Als Hauptquelle für die politische Einordnung von Mossadegh und 1953 nutzen."
      },
      {
        id: "r-mossadegh-bpb",
        bucket: "Pflichtquellen: Textgrundlage",
        type: "Website",
        title: "bpb: Die Geschichte Irans 1941 bis 2020",
        focus:
          "Chronologie von Besatzung, Mossadegh, Verstaatlichung der Ölindustrie und Staatsstreich 1953.",
        link: "https://www.bpb.de/themen/naher-mittlerer-osten/iran/40220/die-geschichte-irans-1941-bis-2020/",
        tags: ["bpb", "Pflicht", "Chronologie"],
        selectionNote:
          "Hilfreich, weil die Quelle Daten und Entwicklungsschritte knapp und verlässlich ordnet.",
        didacticUse:
          "Für Chronologieaufgabe und präzise Sicherung der Station zentral."
      },
      {
        id: "r-mossadegh-terrax",
        bucket: "Zusatzquellen: Überblick und Verbindung",
        type: "Video",
        title: "Iran - Perserreich, Islamische Revolution, Konflikt mit Israel",
        focus:
          "Verbindet Mossadegh mit größeren Entwicklungslinien der iranischen Geschichte.",
        link: "https://www.youtube.com/watch?v=6FlPHpCEwL8",
        tags: ["YouTube", "Überblick"],
        selectionNote:
          "Gut geeignet, wenn die Station in den Gesamtverlauf eingeordnet werden soll.",
        didacticUse:
          "Zur Wiederholung oder als Rückbindung an Station 1 einsetzen."
      }
    ],
    questions: [
      {
        id: "q-mossadegh-1",
        type: "short-text",
        challenge: "Grundlage",
        prompt:
          "Warum war die Besatzung Irans 1941 für die moderne Geschichte des Landes so folgenreich?",
        help:
          "Verbinde Machtwechsel, äußeren Einfluss und politische Abhängigkeit.",
        placeholder: "1941 war folgenreich, weil ...",
        sourceIds: ["r-mossadegh-bpb", "r-mossadegh-zdf"],
        conceptGroups: [
          {
            label: "Abdankung Reza Schahs oder Herrschaftswechsel",
            variants: ["abdankung", "reza schah", "herrschaftswechsel", "neuer schah", "machtwechsel"]
          },
          {
            label: "ausländische Besatzung oder Einflussnahme",
            variants: ["besatzung", "britisch", "sowjetisch", "äußerer einfluss", "fremde mächte"]
          },
          {
            label: "Vorgeschichte späterer Konflikte",
            variants: ["vorgeschichte", "später", "mossadegh", "misstrauen", "abhängigkeit"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "1941 war folgenreich, weil unter ausländischem Druck ein Herrschaftswechsel erzwungen wurde, Iran erneut Abhängigkeit erlebte und damit eine wichtige Vorgeschichte für spätere Konflikte um Souveränität und Einflussnahme entstand."
      },
      {
        id: "q-mossadegh-2",
        type: "short-text",
        challenge: "Akteursanalyse",
        prompt:
          "Warum war Mossadegh für viele Iranerinnen und Iraner attraktiv, aber für ausländische Mächte bedrohlich?",
        help:
          "Verbinde innenpolitische Legitimität und außenpolitische Interessen.",
        placeholder: "Mossadegh war attraktiv, weil ... Bedrohlich war er, weil ...",
        sourceIds: ["r-mossadegh-zdf", "r-mossadegh-bpb"],
        conceptGroups: [
          {
            label: "stand für Parlament, Verfassung oder nationale Souveränität",
            variants: ["parlament", "verfassung", "souveränität", "national", "selbstbestimmung", "demokratisch"]
          },
          {
            label: "griff Ölinteressen an",
            variants: ["öl", "verstaatlichung", "britische interessen", "wirtschaftliche interessen", "ressourcen"]
          },
          {
            label: "erschütterte westlichen Einfluss",
            variants: ["westlicher einfluss", "usa", "britannien", "machtverlust", "kalter krieg"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Mossadegh war attraktiv, weil er für nationale Souveränität und parlamentarische Politik stand. Bedrohlich war er für ausländische Mächte, weil er Ölinteressen angriff und westlichen Einfluss in Iran zurückdrängen wollte."
      },
      {
        id: "q-mossadegh-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Entwicklung von der Besatzung bis zum gefestigten Schah-Staat nach dem Putsch.",
        help:
          "Beginne mit der Besatzung und ende mit dem gestärkten Schah nach dem Regierungssturz.",
        sourceIds: ["r-mossadegh-bpb", "r-mossadegh-zdf"],
        items: [
          {
            id: "occupation-1941",
            label: "Britische und sowjetische Truppen besetzen Iran; Reza Schah muss abdanken.",
            detail: "Die Monarchie bleibt, wird aber neu abhängig."
          },
          {
            id: "mossadegh-1951",
            label: "Mossadegh wird Ministerpräsident.",
            detail: "Er verbindet nationale Souveränität mit parlamentarischem Anspruch."
          },
          {
            id: "oil-nationalization",
            label: "Die iranische Ölindustrie wird verstaatlicht.",
            detail: "Der Konflikt mit Großbritannien verschärft sich massiv."
          },
          {
            id: "coup-1953",
            label: "Mossadegh wird durch einen von der CIA unterstützten Staatsstreich gestürzt.",
            detail: "Der politische Kurs Irans wird gewaltsam umgelenkt."
          },
          {
            id: "shah-strengthened",
            label: "Der Schah geht gestärkt aus dem Putsch hervor.",
            detail: "Die Monarchie wird autoritärer und enger mit dem Westen verbunden."
          }
        ],
        correctOrder: [
          "occupation-1941",
          "mossadegh-1951",
          "oil-nationalization",
          "coup-1953",
          "shah-strengthened"
        ],
        explanation:
          "Die Reihenfolge macht sichtbar, dass der Putsch nicht aus dem Nichts kam: Besatzung, Ölkonflikt, Souveränitätsanspruch und ausländische Intervention führten direkt in die neue Autorität des Schahs."
      },
      {
        id: "q-mossadegh-4",
        type: "short-text",
        challenge: "Konfliktanalyse",
        prompt:
          "Was zeigt der Ölkonflikt unter Mossadegh über das Verhältnis von Rohstoffen und politischer Macht?",
        help:
          "Gesucht ist keine reine Wirtschaftserklärung, sondern der Zusammenhang mit Herrschaft und Außenpolitik.",
        placeholder: "Der Ölkonflikt zeigt, dass ...",
        sourceIds: ["r-mossadegh-zdf", "r-mossadegh-bpb"],
        conceptGroups: [
          {
            label: "Rohstoffe erzeugen Machtinteressen",
            variants: ["rohstoffe", "machtinteressen", "öl bringt macht", "ressourcen", "interessen"]
          },
          {
            label: "wirtschaftliche Kontrolle ist politische Kontrolle",
            variants: ["wirtschaft", "politische kontrolle", "abhängigkeit", "einfluss", "souveränität"]
          },
          {
            label: "Außenpolitik greift in Innenpolitik ein",
            variants: ["außenpolitik", "intervention", "einmischung", "innere politik", "ausländische mächte"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Ölkonflikt zeigt, dass Rohstoffe nicht nur wirtschaftlich wichtig sind, sondern politische Macht und ausländischen Einfluss mitsteuern. Wer Öl kontrolliert, greift oft direkt in Souveränität und Innenpolitik ein."
      },
      {
        id: "q-mossadegh-5",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Beurteile, warum der Sturz Mossadeghs bis heute ein Schlüssel zum Verständnis iranischer Außenpolitik und des Misstrauens gegenüber dem Westen ist.",
        help:
          "Eine gute Antwort verbindet Demokratiefrage, ausländische Intervention und Langzeitfolgen bis in spätere Konflikte.",
        placeholder: "Der Sturz Mossadeghs bleibt zentral, weil ...",
        teacherPrompt:
          "Achte darauf, dass die Lernenden 1953 nicht nur moralisch bewerten, sondern als langfristigen Deutungsanker politischer Beziehungen beschreiben.",
        commonPitfall:
          "Oft wird nur der Putsch selbst genannt, ohne zu erklären, warum sich daraus ein dauerhaftes politisches Gedächtnis bilden konnte.",
        sourceIds: ["r-mossadegh-zdf", "r-mossadegh-bpb", "r-mossadegh-terrax"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["mossadegh", "öl", "cia", "souveränität", "misstrauen", "westen"],
        rubric: [
          { concept: "demokratische oder legitime Regierung wurde gestürzt", keywords: ["demokratisch", "legitim", "gewählte regierung", "mossadegh", "sturz"] },
          { concept: "ausländische Intervention", keywords: ["cia", "usa", "britannien", "intervention", "geheimdienst"] },
          { concept: "Öl und Machtinteressen", keywords: ["öl", "ressourcen", "interessen", "wirtschaft", "souveränität"] },
          { concept: "Langzeitwirkung auf Beziehungen", keywords: ["misstrauen", "bis heute", "langzeitfolge", "außenpolitik", "westen"] },
          { concept: "historisches Urteil", keywords: ["insgesamt", "entscheidend", "deshalb", "ich bewerte", "zentral"] }
        ],
        modelAnswer:
          "Der Sturz Mossadeghs bleibt zentral, weil hier aus iranischer Sicht deutlich wurde, dass nationale Souveränität und demokratische Politik durch ausländische Machtinteressen gebrochen werden konnten. Gerade weil Öl, Geheimdienste und Regimefrage zusammenwirkten, wurde 1953 zu einem dauerhaften Bezugspunkt für Misstrauen gegenüber dem Westen."
      },
      {
        id: "q-mossadegh-6",
        type: "short-text",
        challenge: "Deutung",
        prompt:
          "Warum wurde Mossadegh später nicht nur als gescheiterter Politiker, sondern als politische Erinnerungsfigur so wichtig?",
        help:
          "Gesucht ist die Wirkung seiner Niederlage auf spätere Deutungen von Demokratie, Souveränität und Westen.",
        placeholder: "Mossadegh wurde zur Erinnerungsfigur, weil ...",
        sourceIds: ["r-mossadegh-zdf", "r-mossadegh-bpb", "r-mossadegh-terrax"],
        conceptGroups: [
          {
            label: "steht für verlorene Demokratiechance",
            variants: ["demokratie", "verlorene chance", "parlamentarisch", "hoffnung", "legitime politik"]
          },
          {
            label: "steht für nationale Souveränität",
            variants: ["souveränität", "selbstbestimmung", "unabhängigkeit", "nationale würde", "eigenständigkeit"]
          },
          {
            label: "sein Sturz nährte Misstrauen gegen äußere Mächte",
            variants: ["misstrauen", "westen", "cia", "intervention", "ausländische macht", "erinnerung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Mossadegh wurde zur Erinnerungsfigur, weil sich an ihm eine verlorene Demokratiechance, der Anspruch auf nationale Souveränität und das Misstrauen gegenüber äußerer Intervention bündeln. Gerade seine Niederlage machte ihn politisch so wirksam."
      }
    ]
  },
  {
    id: "pahlavi",
    step: "3",
    title: "Mohammad Reza Pahlavi: Modernisierung und Revolution",
    era: "1953 bis 1979",
    intro:
      "Diese Station behandelt die Phase nach dem Putsch: den ausgebauten Schah-Staat, die Weiße Revolution, soziale und kulturelle Spannungen, den Repressionsapparat und den Weg in die Revolution. Im Zentrum steht das Spannungsfeld von Modernisierung, Abhängigkeit und Autoritarismus.",
    goal:
      "Du kannst erklären, warum der Schah zugleich für Modernisierung und für autoritäre Herrschaft steht und weshalb sich so viele unterschiedliche Gruppen gegen ihn wandten.",
    route:
      "Arbeite zuerst mit dem Terra-X-Überblick, sichere dann mit dem bpb-Text die Reformen und Eskalationspunkte und nutze das ZDF-Video für den größeren außenpolitischen Zusammenhang. Bearbeite erst Herrschaft und Reformen, dann Opposition und Revolutionsdynamik.",
    teacherNote:
      "Wichtig ist, die Herrschaft des Schahs nicht eindimensional zu bewerten. Die Lernenden sollen erkennen, dass Modernisierung und Repression gleichzeitig existierten und sich teilweise gegenseitig verstärkten.",
    teacherToolkit: {
      duration: "45 bis 55 Minuten",
      socialForms: [
        "Einzelarbeit mit Chronologie",
        "Partnervergleich zur Frage Fortschritt oder Herrschaft von oben",
        "Transferantwort als begründete Abwägung"
      ],
      assessmentFocus: [
        "Modernisierung und Autoritarismus nicht gegeneinander ausspielen",
        "soziale Breite der Opposition erkennen",
        "Rolle von SAVAK und politischer Ausgrenzung konkret benennen"
      ],
      misconceptions: [
        "Alle Reformen des Schahs seien automatisch demokratisch gewesen",
        "Die Revolution sei nur religiös motiviert gewesen",
        "Nur arme oder nur religiöse Gruppen hätten opponiert"
      ],
      product:
        "Abwägender Kurztext dazu, warum die Herrschaft des Schahs trotz Reformen zerbrach.",
      extension:
        "Vergleich zwischen Modernisierung von oben und politischer Beteiligung von unten diskutieren."
    },
    visual: {
      src: "https://i.ytimg.com/vi/6FlPHpCEwL8/hqdefault.jpg",
      alt: "Vorschaubild zum Überblicksvideo über Iran"
    },
    visualDossierTitle: "Bilder von Monarchie, Reform und Entfremdung",
    visualDossierIntro:
      "Die Bildsektion hält die Herrschaft des Schahs bewusst widersprüchlich: öffentliche Modernisierung, monarchische Selbstinszenierung und wachsender Abstand zur Gesellschaft gehören hier zusammen.",
    visualDossier: [
      {
        src:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mohammad_Reza_Pahlavi_portrait_(1).jpg",
        alt: "Mohammad Reza Pahlavi im Porträt",
        title: "Der Schah als Herrschaftsbild",
        caption:
          "Porträt Mohammad Reza Pahlavis als Symbol für Modernisierung von oben, Monarchie und starke Westbindung.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild hilft, Reformpolitik und autoritäre Herrschaft an einer Person zusammenzudenken.",
        imageFit: "cover",
        imagePosition: "center top"
      },
      {
        src: "https://i.ytimg.com/vi/6FlPHpCEwL8/hqdefault.jpg",
        alt: "Vorschaubild zum Überblicksvideo über Iran",
        title: "Von Reform zur Revolution",
        caption:
          "Das Überblicksvideo verbindet die Pahlavi-Zeit mit der Revolution und macht die Brüche der Herrschaft besonders sichtbar.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert den Übergang von Stabilisierung nach dem Putsch zur späteren Revolutionsdynamik."
      }
    ],
    actorFocus: {
      title: "Schlüsselfigur dieser Station",
      intro:
        "Mohammad Reza Pahlavi bündelt die Grundspannung dieser Station: ambitionierte Modernisierung, demonstrative Monarchie, enge Westbindung und ein immer härterer autoritärer Zugriff auf Gesellschaft und Opposition."
    },
    actors: [
      {
        name: "Mohammad Reza Pahlavi",
        role: "Schah von Iran und Träger der Pahlavi-Monarchie",
        lens:
          "An ihm wird sichtbar, wie Modernisierung von oben, Repressionsapparat, symbolische Selbstdarstellung und politische Entfremdung zusammenwirkten.",
        whyHere:
          "Für diese Station ist er zentral, weil sich an seiner Herrschaft erklären lässt, warum Reformen das Regime nicht stabilisierten, sondern die Revolutionsdynamik teilweise mitbeschleunigten.",
        imageSrc:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mohammad_Reza_Pahlavi_portrait_(1).jpg",
        imageAlt: "Mohammad Reza Pahlavi im Porträt",
        imageFit: "cover",
        imagePosition: "center top"
      }
    ],
    miniQuestions: [
      {
        id: "mq-pahlavi-1",
        title: "Weiße Revolution",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum war die Weiße Revolution des Schahs zugleich modernisierend und konfliktträchtig?",
        help:
          "Verbinde Reformen mit gesellschaftlichem Widerstand.",
        placeholder: "Die Weiße Revolution war modernisierend, weil ... Konfliktträchtig war sie, weil ...",
        sourceIds: ["r-pahlavi-terrax", "r-pahlavi-bpb"],
        conceptGroups: [
          {
            label: "Reformen oder Modernisierung",
            variants: ["reformen", "modernisierung", "landreform", "wahlrecht für frauen", "entwicklung"]
          },
          {
            label: "autoritäre Durchsetzung oder fehlende Mitsprache",
            variants: ["autoritär", "von oben", "fehlende mitsprache", "ohne beteiligung", "zwang"]
          },
          {
            label: "Widerstand religiöser oder gesellschaftlicher Gruppen",
            variants: ["widerstand", "klerus", "religiöse gruppen", "gesellschaftliche spannungen", "opposition"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Weiße Revolution war modernisierend, weil sie Reformen wie Landumverteilung und Frauenwahlrecht anstieß. Konfliktträchtig war sie, weil sie autoritär von oben durchgesetzt wurde und religiöse wie gesellschaftliche Gruppen gegen den Schah aufbrachte."
      },
      {
        id: "mq-pahlavi-2",
        title: "SAVAK und Angst",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum untergrub der Geheimdienst SAVAK die Legitimität des Schah-Regimes?",
        help:
          "Nenne Repression und politische Wirkung.",
        placeholder: "SAVAK untergrub die Legitimität, weil ...",
        sourceIds: ["r-pahlavi-bpb", "r-pahlavi-zdf"],
        conceptGroups: [
          {
            label: "Überwachung oder Repression",
            variants: ["überwachung", "repression", "verfolgung", "unterdrückung", "geheimdienst"]
          },
          {
            label: "Angst oder Einschüchterung",
            variants: ["angst", "einschüchterung", "abschreckung", "furcht", "unterdrücken"]
          },
          {
            label: "Legitimitätsverlust",
            variants: ["legitimität", "vertrauen verloren", "ablehnung", "gegen das regime", "opposition"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "SAVAK untergrub die Legitimität des Regimes, weil politische Gegner überwacht und unterdrückt wurden, Angst entstand und der Schah dadurch immer stärker als autoritärer Herrscher wahrgenommen wurde."
      },
      {
        id: "mq-pahlavi-3",
        title: "Westbindung als Problem",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum wurde die enge Westbindung des Schahs für viele Gegnerinnen und Gegner zu einem politischen Angriffspunkt?",
        help:
          "Verbinde Abhängigkeit, Legitimität und die Erinnerung an 1953.",
        placeholder: "Die Westbindung wurde zum Angriffspunkt, weil ...",
        sourceIds: ["r-pahlavi-zdf", "r-pahlavi-bpb", "r-pahlavi-terrax"],
        conceptGroups: [
          {
            label: "wirkte abhängig oder fremdbestimmt",
            variants: ["abhängig", "fremdbestimmt", "usa", "westen", "nicht souverän", "westbindung"]
          },
          {
            label: "verstärkte den Legitimitätsverlust des Regimes",
            variants: ["legitimität", "kritik", "unbeliebt", "regime", "entfremdung", "misstrauen"]
          },
          {
            label: "stand im Schatten des Putsches gegen Mossadegh",
            variants: ["mossadegh", "1953", "putsch", "vorgeschichte", "erinnerung", "intervention"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Westbindung wurde zum Angriffspunkt, weil der Schah vielen als abhängig und fremdbestimmt erschien, dadurch an Legitimität verlor und seine Nähe zum Westen im Schatten des Putsches gegen Mossadegh zusätzlich belastet war."
      }
    ],
    resources: [
      {
        id: "r-pahlavi-terrax",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Iran - Perserreich, Islamische Revolution, Konflikt mit Israel",
        focus:
          "Überblick zur Pahlavi-Zeit, Modernisierung, Opposition und Revolution.",
        link: "https://www.youtube.com/watch?v=6FlPHpCEwL8",
        tags: ["YouTube", "Pflicht", "Überblick"],
        selectionNote:
          "Der Film bietet die nötige Verbindung zwischen Monarchie, Revolution und Gegenwart.",
        didacticUse:
          "Als Leitquelle der Station zuerst einsetzen."
      },
      {
        id: "r-pahlavi-bpb",
        bucket: "Pflichtquellen: Textgrundlage",
        type: "Website",
        title: "bpb: Die Geschichte Irans 1941 bis 2020",
        focus:
          "Weiße Revolution, Frauenwahlrecht, Chomeinis Exil, Proteste 1978 und Zusammenbruch der Monarchie.",
        link: "https://www.bpb.de/themen/naher-mittlerer-osten/iran/40220/die-geschichte-irans-1941-bis-2020/",
        tags: ["bpb", "Pflicht", "Chronologie"],
        selectionNote:
          "Die Quelle ist besonders nützlich für exakte Jahreszahlen und die Eskalation von 1963 bis 1979.",
        didacticUse:
          "Für Chronologie und genaue Sicherung der Herrschaftsphase verwenden."
      },
      {
        id: "r-pahlavi-zdf",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Iran & USA: Die Geschichte eines langen Konflikts",
        focus:
          "Außenpolitischer Rahmen der Schah-Herrschaft und ihre enge Westbindung.",
        link: "https://www.youtube.com/watch?v=rIsOLuvXM7I",
        tags: ["YouTube", "ZDFheute"],
        selectionNote:
          "Hilfreich, um die Rolle westlicher Unterstützung für den Schah mitzudenken.",
        didacticUse:
          "Vor allem für Transferfragen und Gegenwartsbezüge nutzen."
      }
    ],
    questions: [
      {
        id: "q-pahlavi-1",
        type: "short-text",
        challenge: "Grundlage",
        prompt:
          "Was wollte der Schah mit der Weißen Revolution erreichen?",
        help:
          "Nenne mindestens zwei Ziele der Reformpolitik.",
        placeholder: "Der Schah wollte ...",
        sourceIds: ["r-pahlavi-terrax", "r-pahlavi-bpb"],
        conceptGroups: [
          {
            label: "Modernisierung des Staates",
            variants: ["modernisierung", "staat modernisieren", "entwickeln", "modern", "fortschritt"]
          },
          {
            label: "wirtschaftliche oder soziale Reformen",
            variants: ["landreform", "wirtschaft", "soziale reformen", "bildung", "entwicklung"]
          },
          {
            label: "Herrschaft stabilisieren",
            variants: ["herrschaft sichern", "macht sichern", "schah stärken", "stabilisieren", "kontrolle"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Schah wollte Iran modernisieren, wirtschaftlich und sozial reformieren und zugleich seine eigene Herrschaft stabilisieren."
      },
      {
        id: "q-pahlavi-2",
        type: "short-text",
        challenge: "Gesellschaftsanalyse",
        prompt:
          "Warum stießen die Feiern von Persepolis 1971 auf so viel Kritik?",
        help:
          "Verbinde Selbstdarstellung der Monarchie mit gesellschaftlicher Wahrnehmung.",
        placeholder: "Die Feiern wurden kritisiert, weil ...",
        sourceIds: ["r-pahlavi-bpb", "r-pahlavi-terrax"],
        conceptGroups: [
          {
            label: "pompöse oder luxuriöse Selbstdarstellung",
            variants: ["pompös", "luxus", "prunk", "selbstdarstellung", "teuer"]
          },
          {
            label: "Distanz zwischen Herrscher und Bevölkerung",
            variants: ["distanz", "abgehoben", "fern von der bevölkerung", "entfremdung", "unverständnis"]
          },
          {
            label: "Symbol für falsche Prioritäten",
            variants: ["falsche prioritäten", "kritik", "widerspruch", "unmut", "opposition"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Feiern von Persepolis wurden kritisiert, weil sie wie eine luxuriöse Selbstdarstellung des Schahs wirkten und die Distanz zwischen Monarchie und Bevölkerung sichtbar machten."
      },
      {
        id: "q-pahlavi-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Entwicklung von der neuen Stabilisierung nach dem Putsch bis zum Sturz des Schahs.",
        help:
          "Beginne mit dem gestärkten Schah nach dem Putsch und ende mit seiner Flucht ins Exil.",
        sourceIds: ["r-pahlavi-bpb", "r-pahlavi-terrax", "r-pahlavi-zdf"],
        items: [
          {
            id: "post-coup",
            label: "Nach dem Putsch wird der Schah politisch gestärkt.",
            detail: "Die Monarchie wird enger mit westlicher Unterstützung verbunden."
          },
          {
            id: "white-revolution",
            label: "Die Weiße Revolution startet mit Reformen von oben.",
            detail: "Modernisierung und Konflikte wachsen zugleich."
          },
          {
            id: "khomeini-exile",
            label: "Chomeini wird ins Exil geschickt.",
            detail: "Ein wichtiger religiöser Gegner verschwindet nicht, sondern gewinnt von außen weiter Einfluss."
          },
          {
            id: "persepolis-1971",
            label: "Der Schah inszeniert die Monarchie in Persepolis mit großem Prunk.",
            detail: "Die Kritik an Elitenferne wächst."
          },
          {
            id: "black-friday",
            label: "Die Proteste eskalieren; der Schwarze Freitag wird zum Wendepunkt.",
            detail: "Repression vertieft die Krise der Monarchie."
          },
          {
            id: "shah-exile",
            label: "Der Schah verlässt Iran.",
            detail: "Die Monarchie bricht zusammen."
          }
        ],
        correctOrder: [
          "post-coup",
          "white-revolution",
          "khomeini-exile",
          "persepolis-1971",
          "black-friday",
          "shah-exile"
        ],
        explanation:
          "Die Reihenfolge zeigt, dass die Monarchie nicht plötzlich zerbrach. Modernisierung, Repression, soziale Entfremdung und politische Ausgrenzung verdichteten sich schrittweise zur Revolution."
      },
      {
        id: "q-pahlavi-4",
        type: "short-text",
        challenge: "Oppositionsanalyse",
        prompt:
          "Warum konnten sich so unterschiedliche Gruppen gegen den Schah zusammenschließen?",
        help:
          "Gesucht sind keine Gruppennamen allein, sondern gemeinsame Gründe des Widerstands.",
        placeholder: "Unterschiedliche Gruppen konnten sich zusammenschließen, weil ...",
        sourceIds: ["r-pahlavi-terrax", "r-pahlavi-bpb", "r-pahlavi-zdf"],
        conceptGroups: [
          {
            label: "Ablehnung von Repression oder SAVAK",
            variants: ["repression", "savak", "unterdrückung", "angst", "autoritäres regime"]
          },
          {
            label: "Unzufriedenheit mit Abhängigkeit oder Westbindung",
            variants: ["westbindung", "abhängigkeit", "usa", "fremdbestimmt", "ausländischer einfluss"]
          },
          {
            label: "soziale oder moralische Kritik",
            variants: ["soziale kritik", "ungleichheit", "moralisch", "religiös", "gesellschaftliche spannungen"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "So unterschiedliche Gruppen konnten sich gegen den Schah zusammenschließen, weil sie Repression, politische Ausschließung und die als fremdbestimmt empfundene Herrschaft ablehnten, auch wenn ihre Ziele danach sehr verschieden waren."
      },
      {
        id: "q-pahlavi-5",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Beurteile die Herrschaft Mohammad Reza Pahlavis: War sie vor allem Modernisierung, vor allem Autoritarismus oder beides zugleich? Begründe mit Materialbezügen.",
        help:
          "Eine starke Antwort wägt Reformen, soziale Veränderungen und Repression sichtbar gegeneinander ab.",
        placeholder: "Die Herrschaft des Schahs war ...",
        teacherPrompt:
          "Achte auf Abwägung statt Schwarz-Weiß-Urteil. Entscheidend ist die Spannung zwischen Reformversprechen und Herrschaftspraxis.",
        commonPitfall:
          "Viele Antworten listen nur Reformen oder nur Gewalt auf. Historisch wichtig ist, wie beides gleichzeitig existierte und die Revolution mit vorbereitete.",
        sourceIds: ["r-pahlavi-terrax", "r-pahlavi-bpb", "r-pahlavi-zdf"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["weiße revolution", "savak", "persepolis", "modernisierung", "westbindung", "opposition"],
        rubric: [
          { concept: "Reformen und Modernisierung", keywords: ["reformen", "modernisierung", "entwicklung", "frauenwahlrecht", "landreform"] },
          { concept: "autoritäre Herrschaft", keywords: ["savak", "repression", "autoritär", "unterdrückung", "macht"] },
          { concept: "gesellschaftliche Spannungen", keywords: ["opposition", "widerstand", "ungleichheit", "kritik", "entfremdung"] },
          { concept: "Abwägung statt Einseitigkeit", keywords: ["zugleich", "einerseits", "andererseits", "nicht nur", "jedoch"] },
          { concept: "historisches Urteil", keywords: ["insgesamt", "deshalb", "entscheidend", "ich bewerte", "fazit"] }
        ],
        modelAnswer:
          "Die Herrschaft Mohammad Reza Pahlavis war beides zugleich: Modernisierung und Autoritarismus. Reformen veränderten Staat und Gesellschaft, doch sie wurden von oben durchgesetzt, durch Repression abgesichert und politisch kaum legitimiert. Gerade diese Spannung erklärt, warum Modernisierung den Sturz des Regimes nicht verhindern konnte."
      },
      {
        id: "q-pahlavi-6",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum reichte wirtschaftliche und soziale Modernisierung allein nicht aus, um die Herrschaft des Schahs dauerhaft zu stabilisieren?",
        help:
          "Verbinde Reformen mit politischer Teilhabe, Repression und gesellschaftlicher Wahrnehmung.",
        placeholder: "Modernisierung reichte nicht aus, weil ...",
        sourceIds: ["r-pahlavi-terrax", "r-pahlavi-bpb", "r-pahlavi-zdf"],
        conceptGroups: [
          {
            label: "Modernisierung ersetzte keine politische Beteiligung",
            variants: ["keine beteiligung", "keine mitsprache", "politische teilhabe", "nicht demokratisch", "von oben"]
          },
          {
            label: "Repression zerstörte Vertrauen",
            variants: ["repression", "savak", "angst", "unterdrückung", "vertrauen verloren", "autoritäre herrschaft"]
          },
          {
            label: "soziale und kulturelle Spannungen blieben bestehen",
            variants: ["spannungen", "ungleichheit", "gesellschaft", "kulturell", "religiös", "entfremdung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Modernisierung reichte nicht aus, weil sie politische Beteiligung nicht ersetzte, durch Repression begleitet wurde und soziale wie kulturelle Spannungen nicht auflöste. Fortschritt ohne Legitimität blieb instabil."
      }
    ]
  },
  {
    id: "islamische-republik",
    step: "4",
    title: "Chomeini, Islamische Republik und Gegenwart",
    era: "1979 bis heute",
    intro:
      "Diese Station führt von der Revolution 1979 über Geiselnahme, Iran-Irak-Krieg, die neue Verfassung und Chomeinis Herrschaft bis zu Atomkonflikt, Sanktionen, Regionalpolitik und aktuellen Spannungen. Sie ist zugleich als Update-Station gebaut, an die neue Meldungen angeschlossen werden können.",
    goal:
      "Du kannst die Grundlogik der Islamischen Republik erklären und neue Iran-Meldungen nach Herrschaft, Gesellschaft, Religion und Geopolitik einordnen.",
    route:
      "Beginne mit der ARTE-Doku zum Aufstieg des Islamismus, arbeite dann mit dem ZDF-Video zur langen Konfliktgeschichte mit den USA und sichere Schlüsselereignisse über den bpb-Text. Nutze zum Schluss die ARTE-Playlist als Update-Fenster für aktuelle Entwicklungen.",
    teacherNote:
      "Diese Station sollte nicht nur auf Bedrohungsbilder reduziert werden. Die Lernenden sollen das politische System, die Konflikte mit dem Westen, gesellschaftliche Spannungen und die regionale Machtpolitik in ihrer Wechselwirkung verstehen.",
    teacherToolkit: {
      duration: "45 bis 60 Minuten",
      socialForms: [
        "Einzelarbeit mit gesicherter Chronologie",
        "Partneraustausch zum politischen System der Islamischen Republik",
        "Lagecheck zu einer aktuellen Meldung im Plenum oder schriftlich"
      ],
      assessmentFocus: [
        "republikanische und theokratische Elemente gleichzeitig benennen",
        "Revolution, Krieg, Atomfrage und Regionalpolitik nicht vermischen",
        "aktuelle Meldungen systematisch statt nur emotional einordnen"
      ],
      misconceptions: [
        "Iran sei seit 1979 nur eine lineare Gottesstaat-Geschichte",
        "alle Konflikte ließen sich nur religiös erklären",
        "aktuelle Iran-Meldungen könnten ohne historische Tiefenlinien verstanden werden"
      ],
      product:
        "Lage-Check-Raster, in dem eine neue Meldung entlang der Achsen Herrschaft, Gesellschaft, Religion und Geopolitik eingeordnet wird.",
      extension:
        "Eine neue Tagesmeldung auswählen und prüfen: Was ist neu, was ist Kontinuität, welche historischen Linien werden aktiviert?"
    },
    visual: {
      src: "https://i.ytimg.com/vi/_qvxZ32aOnE/hqdefault.jpg",
      alt: "Vorschaubild zur ARTE-Doku über 1979 und den Aufstieg des Islamismus"
    },
    visualDossierTitle: "Bilder von Revolution, System und begrenzter Öffnung",
    visualDossierIntro:
      "Die Bildsektion dieser Station soll keine Einheitsgeschichte erzählen. Chomeini steht für Gründung und ideologische Verdichtung, Chatami für Reformhoffnungen und die spürbaren Grenzen des Systems.",
    visualDossier: [
      {
        src:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Portrait_of_Ruhollah_Khomeini.jpg",
        alt: "Ruhollah Chomeini im Porträt",
        title: "Chomeini als Gründungsfigur",
        caption:
          "Porträt Ruhollah Chomeinis als Symbol für Revolution, religiöse Legitimation und den Aufbau der Islamischen Republik.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert den Systembruch und gehört direkt zur Frage nach Herrschaft und Ideologie.",
        imageFit: "cover",
        imagePosition: "center top"
      },
      {
        src:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mohammad_Khatami_-_December_11,_2007.jpg",
        alt: "Mohammad Chatami im Porträt",
        title: "Chatami als Reformsymbol",
        caption:
          "Porträt Mohammad Chatamis als Bezugspunkt für Öffnungshoffnungen, Zivilgesellschaft und blockierte Reformen innerhalb des Systems.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild verhindert, dass die Station als reine Monolith-Geschichte gelesen wird.",
        imageFit: "cover",
        imagePosition: "center top"
      },
      {
        src: "https://i.ytimg.com/vi/_qvxZ32aOnE/hqdefault.jpg",
        alt: "Vorschaubild zur ARTE-Doku über 1979",
        title: "Die Revolution als Bild der Zuspitzung",
        caption:
          "Die ARTE-Doku bündelt die dramatische Übergangsphase von der Monarchie zur Islamischen Republik.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild verbindet die Akteursebene mit der Systemgeschichte der Revolution."
      }
    ],
    actorFocus: {
      title: "Akteurskonstellation dieser Station",
      intro:
        "Diese Station braucht bewusst zwei Gesichter: Chomeini als Gründungsfigur der Islamischen Republik und Chatami als Symbol dafür, dass es innerhalb des Systems Reformansätze, Öffnungshoffnungen und zugleich enge Grenzen des Wandels gab."
    },
    actors: [
      {
        name: "Ruhollah Chomeini",
        role: "Revolutionsführer und prägende Gründungsfigur der Islamischen Republik",
        lens:
          "An Chomeini lassen sich revolutionäre Mobilisierung, religiöse Legitimation und der institutionelle Aufbau der neuen Herrschaftsordnung erklären.",
        whyHere:
          "Für diese Station ist er zentral, weil sich an seiner Person der Bruch von Monarchie und Republik ebenso zeigt wie die theokratische Grundlogik des Systems.",
        imageSrc:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Portrait_of_Ruhollah_Khomeini.jpg",
        imageAlt: "Ruhollah Chomeini im Porträt",
        imageFit: "cover",
        imagePosition: "center top"
      },
      {
        name: "Mohammad Chatami",
        role: "Präsident und Symbolfigur der Reformhoffnungen innerhalb der Islamischen Republik",
        lens:
          "An Chatami werden Öffnung, Zivilgesellschaft, Dialogideen und zugleich die strukturellen Blockaden des Systems sichtbar.",
        whyHere:
          "Er ist wichtig, damit die Gegenwart nicht als reine Einheitsgeschichte gelesen wird, sondern als Spannungsfeld zwischen Reformdruck, gesellschaftlichen Erwartungen und systemischen Grenzen.",
        imageSrc:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mohammad_Khatami_-_December_11,_2007.jpg",
        imageAlt: "Mohammad Chatami im Porträt",
        imageFit: "cover",
        imagePosition: "center top"
      }
    ],
    miniQuestions: [
      {
        id: "mq-republik-1",
        title: "Was änderte 1979?",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Was änderte sich 1979 politisch grundlegend in Iran?",
        help:
          "Verbinde Monarchieende, neue Staatsform und religiöse Führung.",
        placeholder: "1979 änderte sich grundlegend, dass ...",
        sourceIds: ["r-republik-arte", "r-republik-bpb", "r-republik-terrax"],
        conceptGroups: [
          {
            label: "Ende der Monarchie",
            variants: ["monarchie endet", "schah weg", "königsherrschaft endet", "monarchie", "sturz des schahs"]
          },
          {
            label: "Gründung der Islamischen Republik",
            variants: ["islamische republik", "neue staatsform", "referendum", "republik"]
          },
          {
            label: "religiöser Führer erhält große Macht",
            variants: ["chomeini", "religiöser führer", "oberster führer", "geistliche macht", "theokratisch"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "1979 endete die Monarchie, Iran wurde zur Islamischen Republik und die religiöse Führung um Chomeini erhielt eine zentrale politische Machtstellung."
      },
      {
        id: "mq-republik-2",
        title: "Republik und Gottesstaat",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist Iran weder eine reine Demokratie noch einfach nur ein klassischer Gottesstaat?",
        help:
          "Verbinde Wahlen mit Kontrolle durch religiöse Institutionen.",
        placeholder: "Iran ist weder rein demokratisch noch nur Gottesstaat, weil ...",
        sourceIds: ["r-republik-zdf", "r-republik-bpb", "r-republik-terrax"],
        conceptGroups: [
          {
            label: "es gibt Wahlen oder republikanische Elemente",
            variants: ["wahlen", "präsident", "parlament", "republikanisch", "wählen"]
          },
          {
            label: "religiöse Institutionen kontrollieren viel",
            variants: ["oberster führer", "wächterrat", "geistliche", "religiöse kontrolle", "theokratisch"]
          },
          {
            label: "Mischform oder Spannungsverhältnis",
            variants: ["mischform", "spannungsverhältnis", "beides", "nicht eindeutig", "kombination"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Iran ist weder reine Demokratie noch nur klassischer Gottesstaat, weil es zwar Wahlen und republikanische Institutionen gibt, diese aber stark von religiösen Machtzentren wie dem Obersten Führer und dem Wächterrat begrenzt werden."
      },
      {
        id: "mq-republik-3",
        title: "Protest und Kontinuität",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum kehren in Iran immer wieder Reformforderungen und Proteste zurück, obwohl das System so kontrollstark ist?",
        help:
          "Verbinde gesellschaftlichen Wandel mit den Grenzen des politischen Systems.",
        placeholder: "Reformforderungen und Proteste kehren zurück, weil ...",
        sourceIds: ["r-republik-bpb", "r-republik-zdf", "r-republik-arte-playlist"],
        conceptGroups: [
          {
            label: "Gesellschaft verändert sich weiter",
            variants: ["gesellschaft", "jugend", "bildung", "frauen", "verändert sich", "zivilgesellschaft"]
          },
          {
            label: "politische Öffnung bleibt begrenzt",
            variants: ["grenzen", "wächterrat", "oberster führer", "kontrolle", "system", "blockaden"]
          },
          {
            label: "deshalb entsteht wiederkehrender Druck",
            variants: ["proteste", "druck", "unzufriedenheit", "reformforderung", "wiederkehrend", "spannung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Reformforderungen und Proteste kehren zurück, weil sich Gesellschaft und Erwartungen weiter verändern, politische Öffnung aber immer wieder an den Grenzen des Systems scheitert. Gerade daraus entsteht dauerhafter Druck."
      }
    ],
    resources: [
      {
        id: "r-republik-arte",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Der Mullah-Schock - 1979: Aufstieg des Islamismus (1/2) | Doku HD Reupload | ARTE",
        focus:
          "Revolution 1979, Aufstieg Chomeinis und die politische Dynamik des Islamismus.",
        link: "https://www.youtube.com/watch?v=_qvxZ32aOnE",
        tags: ["YouTube", "Pflicht", "ARTE"],
        selectionNote:
          "Diese Doku ist für die Revolutionsphase besonders ergiebig, weil sie die Zuspitzung von 1979 fokussiert.",
        didacticUse:
          "Als Hauptquelle zum Übergang von Monarchie zu Islamischer Republik einsetzen."
      },
      {
        id: "r-republik-zdf",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Iran & USA: Die Geschichte eines langen Konflikts",
        focus:
          "Geiselkrise, Feindbild USA, Atomkonflikt und langfristige Außenbeziehungen.",
        link: "https://www.youtube.com/watch?v=rIsOLuvXM7I",
        tags: ["YouTube", "Pflicht", "ZDFheute"],
        selectionNote:
          "Wichtig, um Revolution, Außenpolitik und Gegenwart nicht voneinander zu trennen.",
        didacticUse:
          "Nach der Revolutionsdoku als Brücke in die spätere Gegenwart einsetzen."
      },
      {
        id: "r-republik-terrax",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Iran - Perserreich, Islamische Revolution, Konflikt mit Israel",
        focus:
          "Verbindet Revolution, Atomkonflikt, Regionalpolitik und Gegenwart in einem Überblick.",
        link: "https://www.youtube.com/watch?v=6FlPHpCEwL8",
        tags: ["YouTube", "Pflicht", "Überblick"],
        selectionNote:
          "Der Film hilft, Einzelaspekte in eine große Erzählung einzuordnen.",
        didacticUse:
          "Zur Sicherung und Wiederholung am Ende der Station nutzen."
      },
      {
        id: "r-republik-bpb",
        bucket: "Pflichtquellen: Textgrundlage",
        type: "Website",
        title: "bpb: Die Geschichte Irans 1941 bis 2020",
        focus:
          "Chronologie zu Revolution, Geiselkrise, Iran-Irak-Krieg, Verfassung, Atomabkommen und Sanktionen.",
        link: "https://www.bpb.de/themen/naher-mittlerer-osten/iran/40220/die-geschichte-irans-1941-bis-2020/",
        tags: ["bpb", "Pflicht", "Chronologie"],
        selectionNote:
          "Besonders nützlich, um Entwicklungslinien von 1979 bis 2020 präzise festzuhalten.",
        didacticUse:
          "Für Chronologie und als Faktenstütze in Transferantworten einsetzen."
      },
      {
        id: "r-republik-arte-playlist",
        bucket: "Tagesaktuelle Erweiterung: fortlaufend ergänzbar",
        type: "Video",
        title: "Krieg im Iran: Aktuelles & Geschichte | ARTE - YouTube",
        focus:
          "Playlist für aktuelle Einordnung, Wiederholung und laufende Ergänzung neuer Iran-Beiträge.",
        link: "https://www.youtube.com/playlist?list=PLlQWnS27jXh_n-o-_NUrqM9bqHjdc03K2",
        tags: ["YouTube", "ARTE", "Update"],
        selectionNote:
          "Diese Playlist macht die Station anschlussfähig für neue Entwicklungen, ohne die historischen Grundlinien zu verlieren.",
        didacticUse:
          "Für Tagesmeldungen oder Hausaufträge einen aktuellen Beitrag auswählen und mit dem Lage-Check-Raster auswerten."
      }
    ],
    questions: [
      {
        id: "q-republik-1",
        type: "short-text",
        challenge: "Grundlage",
        prompt:
          "Warum konnte Chomeini 1979 zur Integrationsfigur der Revolution werden?",
        help:
          "Nenne mindestens zwei Gründe aus Politik und Symbolik.",
        placeholder: "Chomeini konnte zur Integrationsfigur werden, weil ...",
        sourceIds: ["r-republik-arte", "r-republik-bpb", "r-republik-terrax"],
        conceptGroups: [
          {
            label: "vereinte unterschiedliche Gegner des Schahs",
            variants: ["vereinte", "integrationsfigur", "verschiedene gruppen", "gemeinsamer gegner", "bündelte opposition"]
          },
          {
            label: "stand für religiöse oder moralische Autorität",
            variants: ["religiöse autorität", "geistlicher", "moralisch", "ayatollah", "symbolfigur"]
          },
          {
            label: "Exil machte ihn nicht machtlos",
            variants: ["exil", "von außen einfluss", "paris", "botschaften", "wirkte weiter"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Chomeini konnte zur Integrationsfigur werden, weil er sehr unterschiedliche Gegner des Schahs symbolisch bündelte, religiöse Autorität ausstrahlte und trotz Exils politisch präsent blieb."
      },
      {
        id: "q-republik-2",
        type: "short-text",
        challenge: "Folgenanalyse",
        prompt:
          "Welche Folgen hatte der Iran-Irak-Krieg für die Islamische Republik?",
        help:
          "Verbinde Kriegserfahrung, Machtfestigung und Gesellschaft.",
        placeholder: "Der Iran-Irak-Krieg hatte Folgen, weil ...",
        sourceIds: ["r-republik-bpb", "r-republik-zdf", "r-republik-terrax"],
        conceptGroups: [
          {
            label: "Regime konnte sich festigen",
            variants: ["festigen", "macht sichern", "konsolidieren", "regime stärkte sich", "innenpolitisch"]
          },
          {
            label: "große menschliche Verluste oder Kriegstrauma",
            variants: ["hunderttausende tote", "verluste", "trauma", "kriegsmüde", "opfer"]
          },
          {
            label: "Militarisierung oder Sicherheitslogik",
            variants: ["militarisierung", "sicherheitslogik", "repression", "feindbild", "revolutionsgarden"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Iran-Irak-Krieg hatte große menschliche Verluste zur Folge, prägte das kollektive Kriegstrauma und half der Islamischen Republik zugleich, ihre Macht durch Sicherheitslogik und Mobilisierung weiter zu festigen."
      },
      {
        id: "q-republik-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne zentrale Entwicklungsschritte der Islamischen Republik von der Revolution bis zum neuen Atomkonflikt.",
        help:
          "Beginne mit der Revolution und ende mit dem Wiederaufbrechen des Atomstreits nach dem Ende des Abkommens.",
        sourceIds: ["r-republik-arte", "r-republik-bpb", "r-republik-zdf"],
        items: [
          {
            id: "revolution-1979",
            label: "Die Monarchie stürzt; Iran wird zur Islamischen Republik.",
            detail: "Die politische Grundordnung verändert sich radikal."
          },
          {
            id: "hostage-1979",
            label: "Studenten besetzen die US-Botschaft in Teheran.",
            detail: "Die Geiselkrise prägt das Verhältnis zu den USA nachhaltig."
          },
          {
            id: "war-1980",
            label: "Der Iran-Irak-Krieg beginnt.",
            detail: "Der Krieg dauert acht Jahre und prägt Staat und Gesellschaft tief."
          },
          {
            id: "khomeini-1989",
            label: "Chomeini stirbt; Ali Chamenei wird Nachfolger als Oberster Führer.",
            detail: "Die Islamische Republik geht in eine neue Machtphase über."
          },
          {
            id: "jcpoa-2015",
            label: "Das internationale Atomabkommen wird abgeschlossen.",
            detail: "Iran akzeptiert Auflagen, im Gegenzug sollen Sanktionen gelockert werden."
          },
          {
            id: "usa-2018",
            label: "Die USA kündigen das Atomabkommen einseitig auf.",
            detail: "Der Atomkonflikt und die Sanktionsspirale verschärfen sich erneut."
          }
        ],
        correctOrder: [
          "revolution-1979",
          "hostage-1979",
          "war-1980",
          "khomeini-1989",
          "jcpoa-2015",
          "usa-2018"
        ],
        explanation:
          "Die Reihenfolge zeigt, wie sich Revolution, Krieg, Systemstabilisierung und Atomkonflikt gegenseitig überlagern. So wird die Gegenwart als Folge mehrerer historischer Verdichtungen sichtbar."
      },
      {
        id: "q-republik-4",
        type: "short-text",
        challenge: "Geopolitik",
        prompt:
          "Warum spielt Iran bis heute eine zentrale geopolitische Rolle im Nahen und Mittleren Osten?",
        help:
          "Verbinde Lage, Regionalpolitik, Atomfrage oder Stellvertreterkonflikte.",
        placeholder: "Iran spielt geopolitisch eine zentrale Rolle, weil ...",
        sourceIds: ["r-republik-zdf", "r-republik-terrax", "r-republik-arte-playlist"],
        conceptGroups: [
          {
            label: "strategische Lage am Golf oder an Hormus",
            variants: ["hormus", "golf", "strategische lage", "meerweg", "raumlage"]
          },
          {
            label: "Regionalmacht oder Einfluss auf Nachbarstaaten",
            variants: ["regionalmacht", "einfluss", "nachbarstaaten", "milizen", "regionale politik"]
          },
          {
            label: "Atomfrage, Sanktionen oder Konflikt mit USA und Israel",
            variants: ["atom", "sanktionen", "usa", "israel", "nuklear", "konflikt"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Iran spielt geopolitisch eine zentrale Rolle, weil das Land an einem strategischen Schlüsselraum liegt, regionalen Einfluss in mehreren Konfliktzonen ausübt und wegen Atomfrage, Sanktionen und Spannungen mit den USA und Israel internationale Aufmerksamkeit bündelt."
      },
      {
        id: "q-republik-5",
        type: "short-text",
        challenge: "Reformperspektive",
        prompt:
          "Warum ist Mohammad Chatami wichtig, wenn man versteht, dass Wandel in der Islamischen Republik möglich, aber begrenzt ist?",
        help:
          "Verbinde Reformhoffnung, gesellschaftliche Öffnung und die Grenzen des Systems.",
        placeholder: "Chatami ist wichtig, weil ...",
        sourceIds: ["r-republik-bpb", "r-republik-zdf", "r-republik-arte-playlist"],
        conceptGroups: [
          {
            label: "steht für Reformen oder Öffnung",
            variants: ["reformen", "öffnung", "liberalisierung", "dialog", "reformpräsident", "zivilgesellschaft"]
          },
          {
            label: "gesellschaftliche Hoffnungen wurden sichtbar",
            variants: ["hoffnung", "gesellschaft", "jugend", "öffentlichkeit", "beteiligung", "erwartungen"]
          },
          {
            label: "das System setzte Grenzen",
            variants: ["grenzen", "wächterrat", "oberster führer", "blockaden", "system", "nicht vollständig veränderbar"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Chatami ist wichtig, weil an ihm sichtbar wird, dass die Islamische Republik Reform- und Öffnungsphasen zulassen kann. Zugleich zeigen seine Grenzen, dass entscheidende Machtzentren des Systems tiefgreifenden Wandel blockieren können."
      },
      {
        id: "q-republik-6",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Du bekommst eine neue Iran-Meldung. Erkläre, wie du sie mit dieser Lernlandschaft einordnen würdest: Welche vier Achsen prüfst du zuerst und warum?",
        help:
          "Eine tragfähige Antwort benennt den Update-Kompass und zeigt, wie historische Tiefenlinien neue Nachrichten verständlich machen.",
        placeholder: "Ich würde die Meldung zuerst entlang von ... prüfen, weil ...",
        teacherPrompt:
          "Die Lernenden sollen ein Analyseverfahren formulieren, nicht nur spontane Meinungen zur aktuellen Lage äußern.",
        commonPitfall:
          "Oft werden nur aktuelle Fronten genannt. Die Aufgabe verlangt, neue Meldungen mit Herrschaft, Gesellschaft, Religion und Geopolitik systematisch zu verbinden.",
        sourceIds: ["r-republik-arte", "r-republik-zdf", "r-republik-terrax", "r-republik-bpb", "r-republik-arte-playlist"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["herrschaft", "gesellschaft", "religion", "geopolitik", "kontinuität", "neue lage"],
        rubric: [
          { concept: "Achse Herrschaft und politisches System", keywords: ["herrschaft", "oberster führer", "staat", "regime", "institutionen"] },
          { concept: "Achse Gesellschaft", keywords: ["gesellschaft", "proteste", "bevölkerung", "jugend", "frauen", "alltag"] },
          { concept: "Achse Religion und Ideologie", keywords: ["religion", "schia", "ideologie", "revolution", "islamisch"] },
          { concept: "Achse Geopolitik", keywords: ["geopolitik", "regionalmacht", "usa", "israel", "hormus", "atom"] },
          { concept: "historische Einordnung statt bloßer Aktualität", keywords: ["kontinuität", "vorgeschichte", "historisch", "bis heute", "einordnen"] }
        ],
        modelAnswer:
          "Ich würde eine neue Iran-Meldung zuerst entlang von vier Achsen prüfen: Herrschaft, Gesellschaft, Religion und Geopolitik. So kann ich klären, ob es um Machtkämpfe im System, gesellschaftlichen Druck, ideologische Deutungen oder regionale Strategie geht. Erst wenn diese Ebenen zusammengedacht werden, lässt sich unterscheiden, was an einer Meldung wirklich neu ist und was auf ältere Entwicklungslinien zurückgeht."
      },
      {
        id: "q-republik-7",
        type: "short-text",
        challenge: "Gegenwartsdeutung",
        prompt:
          "Warum wäre es falsch, aktuelle Iran-Meldungen nur religiös zu erklären?",
        help:
          "Verbinde Herrschaft, Gesellschaft, Sicherheitslogik und Geopolitik.",
        placeholder: "Es wäre falsch, Iran nur religiös zu erklären, weil ...",
        sourceIds: ["r-republik-zdf", "r-republik-terrax", "r-republik-bpb", "r-republik-arte-playlist"],
        conceptGroups: [
          {
            label: "politische Machtstrukturen sind entscheidend",
            variants: ["herrschaft", "machtstrukturen", "staat", "regime", "institutionen", "kontrolle"]
          },
          {
            label: "gesellschaftliche Konflikte spielen mit hinein",
            variants: ["gesellschaft", "proteste", "frauen", "jugend", "alltag", "soziale spannungen"]
          },
          {
            label: "geopolitische Interessen prägen die Lage mit",
            variants: ["geopolitik", "regionalmacht", "usa", "israel", "atom", "sanktionen", "hormus"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Es wäre falsch, Iran nur religiös zu erklären, weil politische Machtstrukturen, gesellschaftliche Konflikte und geopolitische Interessen die Lage genauso prägen. Religion ist wichtig, aber nur eine von mehreren Analyseachsen."
      }
    ]
  }
];

window.IRAN_MODULES = MODULES;
