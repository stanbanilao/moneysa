// MoneySA / Afri-Loan reference-informed journeys.
// No network requests, identifiers, tracking, storage, or backend writes.
const options = (values, selected = "") => values.map(item => {
  const [value, label] = Array.isArray(item) ? item : [item, item];
  return '<option value="' + value + '"' + (String(value) === String(selected) ? ' selected' : '') + '>' + label + '</option>';
}).join("");
const escapeHtml = text => String(text ?? "").replace(/[&<>"']/g, ch => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[ch]));
const selected = (data, name, value) => String(data[name] ?? "") === String(value) ? "checked" : "";
const row = (name, title, items, data, multiple = false) => (
  '<fieldset class="funnel-fieldset"><legend>' + title + '</legend><div class="funnel-choice-grid">' +
  items.map(item => {
    const [value, label] = Array.isArray(item) ? item : [item, item];
    const checked = multiple ? (data[name] || []).includes(value) : String(data[name] || "") === value;
    return '<label class="funnel-choice"><input type="' + (multiple ? "checkbox" : "radio") + '" name="' + name +
      '" value="' + escapeHtml(value) + '"' + (checked ? " checked" : "") + (multiple ? "" : " required") +
      '><span>' + escapeHtml(label) + '</span></label>';
  }).join("") + '</div></fieldset>'
);
const reasonList = ["Home improvements", "Vehicle expenses", "Monthly cash flow", "Consolidate existing debt", "Education or family costs", "Something else"];
const debts = [["cards","Credit card or store accounts"],["loans","Personal loan payments"],["vehicle","Vehicle instalments"],["bond","Home loan / bond"],["multiple","Several different accounts"]];
const debtBands = ["Below R50 000", "R50 000 – R100 000", "R100 001 – R200 000", "R200 001 – R300 000", "Above R300 000"];
const incomeBands = ["Under R7 000", "R7 000 – R10 000", "R10 001 – R15 000", "R15 001 – R20 000", "R20 001 – R40 000", "R40 001 – R60 000", "Over R60 000"];
let heroDraft = null;

export function loanLandingHtml(brandName) {
  return '<section class="loan-reference"><div class="container loan-reference-grid">' +
    '<div class="loan-reference-copy"><p class="eyebrow">PERSONAL LOAN INFORMATION · SOUTH AFRICA</p>' +
    '<h1>Know what you need.<br><span>Know what it costs.</span></h1>' +
    '<p class="lead">Explore an amount, choose what it is for and understand what lenders may consider. You stay in control of the enquiry you make.</p>' +
    '<div class="loan-reference-checks"><span>✓ Clear questions</span><span>✓ No approval promises</span><span>✓ No upfront payments through this website</span></div>' +
    '<p class="loan-reference-caption">This is an interactive demo, not a loan offer, credit application or lender-matching service.</p></div>' +
    '<div class="funnel-lead-card"><div class="funnel-card-head"><span class="pill">Application journey preview</span>' +
    '<h2>Start with your goal.</h2><p>Only an amount and purpose are needed for this first step. They are not sent anywhere.</p></div>' +
    '<form id="loan-start-form"><div class="field"><label for="loan-amount">Amount to explore (R)</label>' +
    '<input class="input" id="loan-amount" type="number" min="2000" max="350000" step="1000" value="25000" required>' +
    '<span>Demo range R2 000 – R350 000; not a product limit or offer.</span></div>' +
    row("reason","What would you use the money for?",reasonList,{"reason":"Home improvements"}) +
    '<button class="button primary" type="submit" style="width:100%">Continue with example answers <span aria-hidden="true">↗</span></button>' +
    '<p class="form-note">We do not ask for an ID number here. Identity verification would require a verified provider and secure system.</p></form></div></div></section>' +
    '<section class="section white"><div class="container">' +
    '<div class="section-head"><div><p class="eyebrow">THE PROCESS</p><h2>Three things to understand before a real application.</h2></div><p>This is how to approach a financial decision, not a promise of matching or approval.</p></div>' +
    '<div class="steps"><div class="step"><h3>Describe the purpose</h3><p>Be clear about the amount, intended use and repayment period you are considering.</p></div>' +
    '<div class="step"><h3>Assess affordability</h3><p>Review income, existing repayments, living expenses and any debt-review restrictions.</p></div>' +
    '<div class="step"><h3>Compare a formal quotation</h3><p>An authorised provider decides on any offer. Examine interest, fees, term and total cost.</p></div></div></div></section>' +
    '<section class="section mint-bg"><div class="container"><div class="section-head"><div><p class="eyebrow">THE RIGHT QUESTIONS</p><h2>What is the borrowing meant to cover?</h2></div><p>Different purposes have different alternatives and risks.</p></div>' +
    '<div class="grid cols-3">' +
    [['Home and repairs','Consider whether the expense is urgent and what repayments will mean for household essentials.'],['Vehicle and transport','Factor in ongoing insurance, maintenance and fuel costs before a new obligation.'],['Debt consolidation','Replacing several debts with one loan does not necessarily reduce the total amount repaid.'],['School and family needs','Check the full repayment term against the duration of the expense.'],['Temporary cash pressure','Borrowing for recurring shortfalls can make next month more difficult.'],['Other needs','If the purpose is unclear, review your budget before choosing a loan.']].map(x =>
      '<article class="feature-card"><h3>' + x[0] + '</h3><p>' + x[1] + '</p></article>').join('') +
    '</div></div></section>' +
    '<section class="section white"><div class="container"><div class="pledge"><div><h2>Try the numbers without applying.</h2><p>Use a repayment illustration or budget snapshot before considering a credit commitment.</p></div><a class="button mint" data-link href="/tools">Open money tools ↗</a></div></div></section>' +
    '<section class="section aqua-bg"><div class="container"><div class="section-head"><div><p class="eyebrow">COMMON QUESTIONS</p><h2>Know before you continue.</h2></div></div>' +
    '<div class="faq-list"><details class="faq"><summary>Will ' + escapeHtml(brandName) + ' approve my loan?</summary><p>No. This demonstration does not make credit decisions, refer your data or create applications.</p></details>' +
    '<details class="faq"><summary>Can I take a new loan while under debt review?</summary><p>New credit is generally restricted during formal debt review. Verify your status with a registered debt counsellor rather than taking an advertised approval at face value.</p></details>' +
    '<details class="faq"><summary>Is my information sent to a provider?</summary><p>No. These demonstration inputs stay in the browser and do not enter a lead database.</p></details>' +
    '<details class="faq"><summary>Are the stated amounts guaranteed?</summary><p>No. The range above is for testing the form only. There are no connected providers or real loan offers.</p></details></div></div></section>';
}

export function wireLoanLanding(go) {
  const form = document.getElementById("loan-start-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    heroDraft = {
      amount: document.getElementById("loan-amount").value,
      reason: form.querySelector('input[name="reason"]:checked')?.value || ""
    };
    go("/apply?type=loan");
  });
}

export function questionnaireHtml(brandName) {
  return '<section class="page-hero funnel-page-head"><div class="container"><div><p class="eyebrow">INTERACTIVE QUESTIONNAIRE</p>' +
    '<h1>A clearer set of questions.</h1><p class="lead">' + escapeHtml(brandName) +
    ' demonstrates the information a loan or debt-help service might request. No application is created, reviewed, sent or saved.</p></div>' +
    '<div class="page-hero-art" aria-hidden="true">✓</div></div></section>' +
    '<section class="section white"><div class="container"><div class="wizard-wrap funnel-wizard">' +
    '<div class="wizard-top"><span class="pill dark">Demo · No application or referral</span><h2>Explore a journey.</h2>' +
    '<p>Choose the service you actually want. Loan and debt-review paths are separate.</p></div>' +
    '<div class="progress-track"><div class="progress-fill" id="flow-progress" style="width:20%"></div></div>' +
    '<div class="wizard-body" id="flow-body" aria-live="polite"></div></div>' +
    '<p class="notice warn funnel-after-notice"><strong>Important:</strong> This preview does not accept official Form 16 applications, run credit checks or transmit lead details. Please use fictional details only.</p>' +
    '</div></section>';
}

export function wireQuestionnaire(go, startingType = "loan") {
  const panel = document.getElementById("flow-body");
  if (!panel) return;
  const state = {type: startingType === "debt" ? "debt" : "loan", step:0, data:{...((startingType === "loan" && heroDraft) ? heroDraft : {})}};
  heroDraft = null;
  const choiceStep = () =>
    '<h3>Which service do you want to explore?</h3>' +
    '<p class="muted">A request for a loan is not permission to start debt review.</p>' +
    row("type", "Choose one", [["loan","I want information about taking out a loan"],["debt","I want information about debt counselling or debt review"]], {"type":state.type}) +
    '<div class="notice">Debt review is a separate statutory process administered by a registered debt counsellor. Nothing here places you under debt review.</div>';
  const loanStep = () =>
    '<h3>What kind of loan are you considering?</h3><p class="muted">These are example enquiry fields, not an offer.</p>' +
    '<div class="field-grid"><div class="field"><label for="flow-amount">Amount (R)</label><input class="input" id="flow-amount" name="amount" type="number" min="2000" max="350000" step="1000" value="' +
    escapeHtml(state.data.amount || "25000") + '" required><span>Illustrative demo amount only.</span></div>' +
    '<div class="field"><label for="flow-term">Example repayment term</label><select id="flow-term" name="term" required>' +
    options([["","Choose term"],["6","6 months"],["12","12 months"],["24","24 months"],["36","36 months"],["60","60 months"]],state.data.term) +
    '</select></div></div>' + row("reason","What would the loan be used for?",reasonList,state.data) +
    '<div class="notice warn">We do not accept an ID number at this stage. A real provider would need its own documented, secure identity-verification process.</div>';
  const debtStep = () =>
    '<h3>Which payments are difficult right now?</h3><p class="muted">Choose one or several. This does not count as a debt-review application.</p>' +
    row("struggling","Types of existing payments",debts,state.data,true) +
    '<p class="error" id="flow-debt-error" role="alert"></p>' +
    row("debtBand","About how much is outstanding across your accounts?",debtBands,state.data);
  const loanProfile = () =>
    '<h3>Understand the wider financial picture.</h3><p class="muted">Lenders need a fuller affordability assessment than this demonstration provides.</p>' +
    '<div class="field-grid"><div class="field"><label for="flow-net-income">Approximate monthly take-home income (R)</label>' +
    '<input id="flow-net-income" class="input" name="netIncome" type="number" min="0" max="10000000" value="' +
    escapeHtml(state.data.netIncome ?? "") + '" required></div>' +
    '<div class="field"><label for="flow-employment">Employment situation</label><select id="flow-employment" name="employment" required>' +
    options([["","Choose one"],"Employed","Self-employed","Pensioner","Not currently working","Other"],state.data.employment) +
    '</select></div></div>' +
    row("underReview","Are you currently under formal debt review?",["Yes","No","I am not sure"],state.data) +
    '<div class="notice warn">If you are under formal debt review, new credit is generally restricted. Selecting “Yes” does not switch this loan enquiry into debt counselling.</div>';
  const debtProfile = () =>
    '<h3>Which income range describes your situation?</h3><p class="muted">This is for an illustrative profile only.</p>' +
    row("grossIncomeBand","Monthly income before deductions",incomeBands,state.data) +
    '<div class="field-grid"><div class="field"><label for="flow-debt-employment">Employment situation</label><select id="flow-debt-employment" name="employment" required>' +
    options([["","Choose one"],"Employed","Self-employed","Pensioner","Not currently working","Other"],state.data.employment) +
    '</select></div><div class="field"><label for="flow-debt-payments">Total monthly debt repayments (R) — optional</label>' +
    '<input id="flow-debt-payments" class="input" name="debtPayments" type="number" min="0" max="2000000" value="' + escapeHtml(state.data.debtPayments ?? "") + '"></div></div>' +
    '<div class="notice">A registered debt counsellor determines whether formal debt review is appropriate. A website questionnaire cannot decide this.</div>';
  const contactStep = () =>
    '<h3>How consent and contact fields should work.</h3>' +
    '<p class="muted">Use made-up values such as “Demo User” and “demo@example.com”. Nothing is delivered.</p>' +
    '<div class="field-grid"><div class="field"><label for="flow-first">Example first name</label><input class="input" id="flow-first" name="first" type="text" minlength="2" maxlength="70" required autocomplete="off" placeholder="Demo"></div>' +
    '<div class="field"><label for="flow-last">Example surname</label><input class="input" id="flow-last" name="last" type="text" minlength="2" maxlength="70" required autocomplete="off" placeholder="User"></div>' +
    '<div class="field"><label for="flow-email">Example email</label><input class="input" id="flow-email" name="email" type="email" maxlength="120" required autocomplete="off" placeholder="demo@example.com"></div>' +
    '<div class="field"><label for="flow-mobile">Example mobile number</label><input class="input" id="flow-mobile" name="mobile" type="tel" inputmode="tel" pattern="[0-9+() -]{9,18}" autocomplete="off" required placeholder="071 000 0000"></div></div>' +
    '<label class="check-row"><input type="checkbox" name="demoNotice" required> I understand this is a simulation. No loan request or debt-review application will be sent.</label>' +
    '<label class="check-row"><input type="checkbox" name="marketing"> Optional marketing consent example (off by default; no marketing is actually sent).</label>' +
    '<div class="notice warn">Before real data collection, a verified operator must disclose exactly who receives details, why, how long they are retained, and how consent can be withdrawn.</div>';
  const success = () =>
    '<div class="result"><span class="pill">Completed locally</span><h3 style="margin-top:1rem">Your example journey is complete.</h3>' +
    '<p><strong>No enquiry was transmitted, stored or matched to any provider.</strong> No lender approved credit and no debt counsellor opened a case.</p>' +
    '<div class="results-grid"><div class="result-metric"><span>Service selected</span><strong style="font-size:1.1rem">' +
    (state.type === "loan" ? "Loan information" : "Debt support information") + '</strong></div>' +
    '<div class="result-metric"><span>Current status</span><strong style="font-size:1.1rem">Demo only</strong></div></div>' +
    '<p style="margin-top:1rem">Read the relevant guidance before taking any actual next step with an identified, registered service provider.</p>' +
    '<div class="actions"><button type="button" id="flow-read" class="button primary">Read the guidance ↗</button>' +
    '<button type="button" id="flow-again" class="button outline">Start another example</button></div></div>';
  const stepTitles = ["Your choice", "What you need", "Financial overview", "Contact & consent", "Summary"];
  function draw(){
    document.getElementById("flow-progress").style.width = ((state.step + 1) * 20) + "%";
    panel.innerHTML = state.step === 4 ? success() :
      '<div class="funnel-step-meta"><span>Step ' + (state.step + 1) + ' of 5</span><span>' + stepTitles[state.step] + '</span></div>' +
      '<form id="flow-form">' +
      (state.step === 0 ? choiceStep() :
       state.step === 1 ? (state.type === "loan" ? loanStep() : debtStep()) :
       state.step === 2 ? (state.type === "loan" ? loanProfile() : debtProfile()) : contactStep()) +
      '<div class="wizard-footer">' +
      (state.step ? '<button type="button" id="flow-back" class="button outline">Back</button>' : '<span class="tag">Demonstration only</span>') +
      '<button type="submit" class="button primary">' + (state.step === 3 ? "Complete demo" : "Continue") + ' ↗</button></div></form>';
    const form=document.getElementById("flow-form");
    if(form){
      form.addEventListener("submit", event => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        if (state.step === 1 && state.type === "debt" && !form.querySelector('input[name="struggling"]:checked')) {
          const error=document.getElementById("flow-debt-error"); if(error)error.textContent="Choose at least one payment type to continue."; return;
        }
        if (state.step === 0) {
          const next=form.querySelector('input[name="type"]:checked')?.value || state.type;
          if(next!==state.type)state.data={};
          state.type=next;
        } else if(state.step===3) {
          state.data.contactEntered=true;  // Never retain names, emails or telephone numbers.
          state.data.marketingDemo=form.elements.marketing.checked;
        } else {
          const parsed = new FormData(form);
          for(const [key,value] of parsed.entries()) {
            if(key==="struggling")continue;
            state.data[key]=value;
          }
          if(state.type==="debt" && state.step===1)state.data.struggling=parsed.getAll("struggling");
        }
        state.step=Math.min(4,state.step+1);draw();
      });
      const back=document.getElementById("flow-back");if(back)back.addEventListener("click",()=>{state.step=Math.max(0,state.step-1);draw()});
    }
    const read=document.getElementById("flow-read");if(read)read.addEventListener("click",()=>go(state.type==="loan"?"/personal-loans":"/debt-review"));
    const again=document.getElementById("flow-again");if(again)again.addEventListener("click",()=>{state.type="loan";state.data={};state.step=0;draw()});
  }
  draw();
}
