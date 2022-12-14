# ï¼

> ð§...

- first-order logic?
- a single rule of inference, called resolution?
- clausal form? a restricted clausal form called Horn clause logic
- GÃ¶del's incompleteness theorems? è¦ä¹èªç¸çç¾ï¼è¦ä¹ä¸å®å¤
- è¯æè®ºï¼æ¨¡åè®ºï¼ç±»åè®ºï¼ä¼¼ä¹ä¸åæ¯æ°çé»è¾äºï¼ï¼

## æ°çé»è¾

- accent**well-formed formula** (abbr. **wff**), a finite sequence of symbols from a given alphabet that is part of a formal language (well-formed åæä»ä¹è¦æ±ð¤)
- accent**atomic formula** (aka **atom**)ï¼ä¸å«é»è¾è¿æ¥è¯çï¼æèè¯´ä¸å« sub-formulas ç wff
- accent**æå­**ï¼accent**literal**ï¼an **atom** or its negation
- accent**å­å¥**ï¼accent**clause**ï¼an expression formed from a finite collection of **literal**s
    - accent**Horn clause**ï¼æ¯æå­ (literal) çæå (disjunction)ï¼å¹¶ä¸æå¤åªæä¸ä¸ªè¯å®æå­
        - A Horn clause with exactly one positive literal is a **definite clause**
        - A Horn clause without a positive literal is called a **goal clause**
        - æ³¨æ Horn clauses çååæ¯ååèå¼
- accent**å¥å­**ï¼accent**sentence**ï¼æ²¡æèªç±åéçå¬å¼ð¤
- accent**theory**ï¼ä¸ç»å¥å­ð¤
- A set of Horn clauses is called a **logic program** [1]

<!--  -->

- Boolean logic
- accent**ååèå¼**ï¼accent**conjunctive normal form** (**CNF**) or accent**clausal normal form**ï¼æ¯è¥å¹²ä¸ªå­å¥ (clause) çåå (conjunction)ï¼å¶ä¸­å­å¥ä¸ºæå­ (literal) çæåï¼ä¹å³ **AND of ORs**
    - æææå­çååå½ç¶æ¯ CNF çï¼æ¯ä¸ªæå­é½çä½ä¸ä¸ªå­å¥
    - æææå­çæåä¹æ¯ CNF çï¼æ³¨æï¼åæ¶ä¹æ¯ DNF çï¼ï¼çä½åªæä¸ä¸ªå­å¥ï¼ð¤è¿ç§æåµå¾åç´è§ï¼è³äºä¸ºä»ä¹ä¼å®ä¹è¿ç§æ åå½¢å¼ï¼è¯´æ¯å¨èªå¨å®çè¯æä¸­æç¨ï¼
- accent**æåèå¼**ï¼accent**disjunctive normal form** (**DNF**)ï¼å³ **OR of ANDs**

<!--  -->

- **æ¼ç»**ï¼**deduction**ï¼ä»ä¸è¬å°ç¹æ®ï¼ä»ä¸è¬æ§è§å¾åºåæ¥æ¢è®¨å·ä½äºç©
- **å½çº³**ï¼**induction**ï¼ä»ç¹æ®å°ä¸è¬ï¼ä»ä¸ªå«äºç©åºåæ¦æ¬åºä¸è¬æ§è§å¾
- accent**å½ç»**ï¼accent**resolution**ï¼

## è§åå­¦ä¹ 

### å½é¢è§åå­¦ä¹ 

- åºè´¯è¦ç
- åªæä¼å

### ä¸é¶è§åå­¦ä¹ 

FOIL (First-Order Inductive Learner)

åºè´¯è¦çï¼èªé¡¶åä¸ï¼ä»ä¸è¬å°ç¹æ®ï¼

æ¬è´¨åªæ¯æå½é¢è§åå­¦ä¹ çè¿ç¨ç¨å æ¹åä½¿å¶è½åºç¨å¨ä¸é¶è§åä¸

### å½çº³é»è¾ç¨åºè®¾è®¡

ILP (Inductive Logic Programming)

èªåºåä¸

#### æå°ä¸è¬æ³å

LGG (Least General Generalization)ï¼ä»åå­å°±è½çåºæ¥ï¼ç»å®è¥å¹²è§åï¼å¸ææ»ç»æä¸æ¡ç¸å¯¹æ³åçè§åï¼ä½åæ¶åä¸è¦å¤ªè¿æ³åï¼æå°æ³åï¼ï¼å¯ä»¥ç¨æå¤§å¬çº¦æ°æ¥ç±»æ¯

- å¯¹äºä¸¤æ¡è§åï¼ð¤åºè¯¥éè¦åæååçå½¢å¼ï¼
    - åæ¾é½æçè°è¯ï¼ç¶åå¯¹å¶ä¸­ç¸åä½ç½®çå¸¸éè¿è¡èå¯ï¼è¥ç¸ååä¿çï¼è¥ä¸ç¸ååæ¿æ¢ä¸ºåéï¼æ³åï¼
    - å¯¹äºä¸æ¯é½å«æçè°è¯ï¼ç´æ¥å¿½ç¥ï¼å¦å LGG å°±ä¸è½ç¹åæè¯¥è§å

ð¤RLGG

### éå½ç»

inverse resolutionï¼åç§æ¹å¼ï¼å¨ä¸é¶è§åéè¦ç¨å° ç½®æ¢ å åä¸ ä¸¤ç§æä½

## éè¯»ææ

1. Stephen Muggleton. Inductive Logic Programming. *New Generation Computing*. 1991. ([PDF](https://www.doc.ic.ac.uk/~shm/Papers/ilp.pdf))
   ææç¨çæ¯éå½ Aï¼æ­£æä¸æ¯å¾æï¼åªçå°æå¾å¤ç§ operations
2. å¨å¿å. æºå¨å­¦ä¹ . 2016 å¹´ç¬¬ 1 ç.ï¼ç¬¬ 15 ç« ï¼è§åå­¦ä¹ ï¼
