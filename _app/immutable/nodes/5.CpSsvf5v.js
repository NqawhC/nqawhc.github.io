import{$ as e,H as t,I as n,J as r,P as i,R as a,T as o,X as s,Z as c,_ as l,et as u,g as d,j as f,k as p,l as m,m as h,p as g,q as _,s as v,y}from"../chunks/CGDh-eqo.js";import"../chunks/xihTtKlq.js";import{n as b}from"../chunks/Cnff18jI.js";import{t as x}from"../chunks/7vcmureJ.js";import{t as S}from"../chunks/C6ibUodc.js";import{n as C,r as w,t as T}from"../chunks/B2xE0bxY.js";var E=u({load:()=>D}),D=async({fetch:e})=>{let[t,n]=await Promise.all([e(`/data/harness-integrated.json`).then(e=>e.json()),e(`/data/harness-toolmix.json`).then(e=>e.json())]);return{integrated:t,toolmix:n}},O=y(`<div class="rounded-lg border border-border bg-panel p-3.5"><div class="flex items-baseline justify-between gap-3"><div class="flex items-baseline gap-2"><span class="inline-block h-2.5 w-2.5 shrink-0 translate-y-[1px] rounded-full"></span> <span class="font-semibold text-fg"> </span> <span class="text-[11.5px] text-mut"> </span></div> <span class="shrink-0 tabular-nums text-[13px] font-semibold text-fg"> <span class="text-[11px] font-normal text-mut">/ 3</span></span></div> <div class="mt-2 h-1.5 overflow-hidden rounded-full" style="background:rgba(128,128,128,0.16)"><div class="h-full rounded-full"></div></div> <p class="mt-2.5 text-[14.5px] leading-snug text-fgdim"> </p> <p class="mt-1 text-[12px] text-mut"> </p></div>`),k=y(`<article class="mx-auto max-w-2xl"><a href="/" class="text-[13.5px] text-mut hover:text-fg">← all posts</a> <h1 class="mb-3 mt-4 text-[32px] font-bold leading-tight tracking-tight"> </h1> <p class="mb-4 text-[19px] leading-relaxed text-fgdim">Hold the model fixed, one local DeepSeek V4 Flash, and change everything around it. Six harnesses wrapped
		the same weights, each with its own tool set and system prompt, the levers people believe make a coding
		model better. Handed the same tasks and graded the same way, the work came out the same across every
		harness that actually commits its fixes. The bare four-tool harness scored as high as the heaviest, which
		says more about the model than the scaffold: a capable one brings its own competence and works about the
		same whatever toolset it is handed. What changed, by multiples, was the time and tokens each one
		spent getting there. And one harness fell out of that band completely, not by writing worse code, but by
		not writing any.</p> <p class="mb-6 text-[13px] text-mut"> </p> <div class="space-y-4 text-[16px] leading-relaxed text-fgdim [&amp;_a]:text-acc [&amp;_h2]:mt-9 [&amp;_h2]:text-[21px] [&amp;_h2]:font-semibold [&amp;_h2]:tracking-tight [&amp;_h2]:text-fg [&amp;_b]:text-fg [&amp;_blockquote]:my-6 [&amp;_blockquote]:rounded-xl [&amp;_blockquote]:border [&amp;_blockquote]:border-border [&amp;_blockquote]:border-l-2 [&amp;_blockquote]:border-l-acc [&amp;_blockquote]:bg-panel [&amp;_blockquote]:p-5 [&amp;_blockquote]:text-[17px] [&amp;_blockquote]:leading-relaxed [&amp;_blockquote]:text-fg"><p>Six harnesses, all driving one local DeepSeek V4 Flash. Off-the-shelf, by tool count lightest to heaviest: <b>Pi</b> (0.80.10), a bare 4-tool harness; <b>OpenCode</b> (1.17.10), a mid-weight framework; <b>Claude Code</b> (2.1.186), a heavy
			one that does not speak the local server's API, so it reaches the model through a small proxy
			(<a href="https://github.com/router-for-me/CLIProxyAPI">CLIProxyAPI</a>); and <b>nanocoder</b> (1.29.0), a
			community, local-first harness. Plus two compact Rust agents, <b>jcode</b> (0.72.0) and <b>claurst</b> (0.1.7), the latter a clean-room reimplementation of Claude Code. The same model sits underneath all of them, <a href="/data#models">served the same way throughout</a>, the same set of real bug fixes, the same
			grading, and only the wrapper moves.</p> <p>One measurement note, put here once. Metering the two Rust agents took more work than the other four.
			jcode and claurst report only a final-turn token count, not the session total, so a first pass left them
			off the cost charts entirely. Reading jcode's full event stream and metering claurst against the server's
			own token counter recovered the real numbers, and all six now sit on the same token and time axes. The
			correction earned its keep: it is what showed the two lean-looking Rust agents are nothing of the sort.</p> <h2>The grades come out the same</h2> <p>Across the tasks no grade difference held up among the harnesses that commit their fixes. Pi, OpenCode,
			jcode, Claude Code and nanocoder all land in the same overlapping place, because the run-to-run noise is
			wide enough to swallow the gaps between them whole.</p> <blockquote>On the hardest tasks the same harness scores a basic attempt on one run and a solid fix on the next,
			a full grade apart, with nothing changed between them but the random seed.</blockquote> <p>The swing is that wide, so with only 2 or 3 runs the noise decides which harness looks best, and a
			ranking that changes every time you rerun it is no ranking at all. One of the six read a grade worse at
			first, jcode, until I noticed it was not being given the resume-nudge OpenCode gets when a harness stops
			after planning without editing; nineteen of its first sixty-four runs were empty diffs for that reason
			alone. With the identical nudge it came straight back into the band, an apparent quality gap that was
			really a difference in how the harness was driven, not in the fixes it wrote.</p> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">Quality: grade per run, all six harnesses</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">Same model throughout, only the harness varies; each dot is one run, the marker its task-weighted
				average with a 95% interval. Five harnesses overlap in one band. The sixth, claurst, sits a full
				grade below, and that gap is empty diffs, not worse fixes.</figcaption></figure> <p>claurst is the one that does not come back. It sits a full grade below the others, and not because its
			fixes are bad, when it commits an edit the fix is often right, and on the hardest search bug it
			diagnosed the exact one-line cause. The trouble is that on solvable tasks roughly half its runs never
			produce an edit at all, about 46% empty against none for Pi, OpenCode or jcode, and why that happens is
			the interesting part.</p> <h2>claurst's intent is different</h2> <p>The reason is what claurst is built to do when it is unsure. It is an interactive pair-programmer, a TUI
			tool meant to sit beside a person, and its own system prompt tells it to ask the user rather than guess
			and to describe a blocker so the user can assist, backed by a set of tools for exactly that, a question
			tool, a notify tool, a native approval dialog for every edit. Run headless, with no user to answer, that
			caution has nowhere to go, so instead of editing it stops to ask a question or flag a blocker, and an
			unanswered question grades as nothing. A completion contract compounds it, claurst is told not to declare
			a task finished without an audit and evidence, so when it cannot fully verify it simply does not finish.
			The nudge that rescued jcode barely moves it, because its resume opens a fresh session with no memory of
			the plan it just made, so telling it to apply the fix it described lands on nothing. Benched this way,
			claurst measures the gap between a supervised tool and an unsupervised harness at least as much as the
			model beneath it.</p> <blockquote>From claurst's own system prompt. On getting stuck: "If stuck, ask the user rather than guessing," and
			"If you cannot find a concrete path, ask the user." Its question tool, as described to the model: "Ask
			the user a question and wait for their response. Use this when you need clarification, confirmation, or
			additional information from the user." And its rule for finishing: calling the completion tool "without a
			real audit is a goal contract violation."</blockquote> <p>So the band is real, and it has a floor. Among harnesses that actually commit their fixes, Pi, OpenCode,
			jcode, Claude Code and nanocoder, the grade is a wash and only the cost differs. But a harness can be bad
			enough to drop out of the band, and when it does the failure does not look like worse code, it looks like
			no code, edits that never land. The noise swallows the difference between good harnesses; it does not
			rescue a harness that under-commits.</p> <h2>The difference is time and tokens</h2> <p>With all six on the same axes, the lean end turns out to be small: only Pi and OpenCode reach the fix
			cheaply, around 13 to 20 thousand tokens. The other four are heavy explorers that generate several times
			as much to land the same edit, and the two Rust agents belong squarely in that group, not with the lean
			pair they superficially resemble. jcode spends about what Claude Code does; claurst is the slowest harness
			of the six. The cost is all on the output side, in what the model generates and the tools it runs. They
			read very differently too, the heavy group exploring far more, but on this model that barely registers,
			because DeepSeek reads input at nearly the same speed at 10K tokens or 200K, so heavy context is close to
			free here and would only bite as billed input on a metered API. What costs is generation.</p> <p>Wall-clock is not really a separate axis from that. Across the clean runs, time tracks output tokens at a
			per-harness decode rate that barely moves, a correlation around 0.9. Every harness's minutes below are
			measured directly, each run taken one at a time on a quiet server so concurrency never distorts the clock.
			Claude Code's measured time even runs above what its tokens alone would predict, because on the hardest
			tasks it balloons its context past a million tokens and decode slows to a crawl, a cost that never shows
			up in the word count.</p> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">Efficiency: output tokens per run</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">Zoomed to 100K by default; toggle to Full for the whole axis. Only Pi and OpenCode are lean; the other
				four, both Rust agents among them, generate several times more to reach the same fix, with nanocoder
				the heaviest.</figcaption></figure> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">Efficiency: minutes per run (measured, one run at a time)</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">Zoomed to 12 minutes by default; toggle to Full to see the runs where Claude Code balloons its
				context. Pi and OpenCode finish in a couple of minutes; Claude Code and claurst are the slowest.</figcaption></figure> <h2>Pi reasons, OpenCode delegates</h2> <p>The two lean harnesses spend the clock differently. Pi does the whole task in one context, verifying by
			thinking, so almost all of its roughly twenty thousand tokens are reasoning in one long stream. OpenCode
			is leaner still, near thirteen thousand: it hands chunks of work to subagents, each a separate sub-run,
			but on this model those sub-runs stay short, so counting them back in barely moves its total. What
			separates the two is pace, the same model decodes at one rate for both, but Pi spends its clock generating
			in long reasoning bursts while OpenCode shuttles work out to subagents and waits on the hand-offs, which
			is how it still comes in the fastest of all six despite the round-trips. And none
			of it moves the grade, because the 8 bugs are subtle logic bugs, a guard testing the wrong condition, a
			state change firing a step too early, that a subagent catches no better than a careful line of reasoning,
			and a capable model lands either way.</p> <h2>Claude Code and nanocoder explore most, and edit only when certain</h2> <p>These two are the heavy explorers, each burning several times the tokens of a lean harness to reach the
			same fix and each holding off on edits until late in the run. Claude Code runs the most tool calls of the
			six by a wide margin, around 70 to a task where Pi needs 39 and OpenCode 30, with jcode and claurst
			exploring hard too at roughly 50 and 43, and its first edit
			lands about 80% of the way through; nanocoder makes fewer calls but re-reads the same files more than
			anything else, and commits nearer 70%. Nearly all of that front-loaded work is looking rather than
			touching, and the edit each finally makes is the same handful of lines the lean harnesses landed long
			before. That thoroughness is usually just time, but not always: on the one bug every lean harness fails,
			leaving an empty diff, Claude Code ground through 140K tokens and came away with partial credit, the rare
			case where heavy exploration actually buys something the lean harnesses miss.</p> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">How each harness works a task: tool calls in order</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">One representative run per harness, illustrative rather than averaged, each tool call a cell in the
				order it happened. Strip length is
				the call count (Pi 35, OpenCode 27, jcode 43, Claude Code 59, nanocoder 35, claurst 34), edits in red.
				OpenCode is short and decisive; the rest, both Rust agents included, are long stretches of reading and
				searching with their few edits clustered near the end.</figcaption></figure> <h2>The six, side by side</h2> <p>Laid out on one set of axes, all six separate cleanly on everything above the grade, and five of them
			land together on the grade itself. The heavy four, Claude Code and nanocoder plus both Rust agents, spend
			multiples of Pi and OpenCode in steps taken, tokens generated and minutes on the clock to reach the same
			edit. claurst is the exception on quality too, sitting below the rest for the empty diffs it leaves when
			run headless.</p> <figure class="not-prose my-6"><!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">All six, every value measured. Nanocoder and Claude Code cost the most on tokens and time, with jcode
				and claurst close behind; only Pi and OpenCode stay lean. Five land together on the grade, their
				intervals overlapping; claurst sits below, dragged down by the runs where it never edits. Rows are
				task-weighted averages, the minutes measured directly, each run taken one at a time.</figcaption></figure> <h2>The scorecard</h2> <p>The whole thing, one harness to a line: where it landed on quality, what it spent to get there, and the
			one-line read. On a single 0-to-3 scale the shape is plain, five harnesses stacked together and claurst
			alone below them.</p> <figure class="not-prose my-6"><div class="flex flex-col gap-2.5"></div> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">All six on one model. Quality is the task-weighted grade and every bar shares the same 0-to-3 axis;
				output cost is per run, now measured for all six, the two Rust agents via their event streams and the
				server's own token counter. Five harnesses share the band; claurst is the only one that drops out, and
				only by not committing an edit, not by the quality of the edits it does commit.</figcaption></figure> <h2>Which one to reach for</h2> <p>This is DeepSeek V4 Flash on eight focused bug fixes, so read it scoped. For a capable model, and a
			harness that reliably commits its edits, the harness is largely an efficiency choice rather than a quality one, at
			least in my agentic workloads in a large codebase. The one thing that does move the grade is a harness
			that under-commits, and that is a different failure, it shows up as empty diffs rather than worse fixes,
			and no amount of nudging fully closes it. And the next time a post claims that some harness, some prompt,
			or some clever context file made a coding model measurably better, the first thing to ask is how many
			times they ran it, because under about 10 runs a condition there is a good chance they mostly measured
			the weather.</p></div> <!></article>`);function A(u,y){r(y,!0);let E=b(`harness-showdown`),D={"dsflash-pi":`#0D9488`,"dsflash-opencode":`#6366F1`,"dsflash-jcode":`#CA8A04`,"dsflash-claude-local":`#D97757`,"dsflash-nanocoder":`#DB2777`,"dsflash-claurst2":`#DC2626`},A=e=>Math.round(e).toLocaleString(),j=e=>{if(!e||e.length<2)return[e?.[0]??0,e?.[0]??0];let t=e.reduce((e,t)=>e+t,0)/e.length,n=1.96*Math.sqrt(e.reduce((e,n)=>e+(n-t)**2,0)/e.length)/Math.sqrt(e.length);return[t-n,t+n]},M=y.data.integrated.quality.filter(e=>e.mean!==null).map(e=>({name:e.name,desc:``,color:D[e.key],mean:e.mean,ci:e.ci,vals:e.vals})),N=y.data.integrated.efficiency.filter(e=>e.tokens_mean!==null),P=N.map(e=>({name:e.name,desc:``,color:D[e.key],mean:e.tokens_mean,ci:j(e.tokens_vals),vals:e.tokens_vals})),F=N.filter(e=>e.wall_mean!==null).map(e=>({name:e.name,desc:e.wall_source,color:D[e.key],mean:e.wall_mean,ci:j(e.wall_vals),vals:e.wall_vals})),I=[`dsflash-pi`,`dsflash-opencode`,`dsflash-jcode`,`dsflash-claude-local`,`dsflash-nanocoder`,`dsflash-claurst2`],L=Object.fromEntries(y.data.integrated.efficiency.map(e=>[e.key,e])),R=Object.fromEntries(y.data.integrated.quality.map(e=>[e.key,e])),z=[`Pi`,`OpenCode`,`jcode`,`Claude Code`,`nanocoder`,`claurst`],B=I.map(e=>D[e]),V=(e,t,n=0)=>L[e]?.[t]??n,H=[{label:`Avg. steps`,vals:I.map(e=>V(e,`steps_mean`)),fmt:e=>e.toFixed(1)},{label:`Avg. output tokens`,vals:I.map(e=>V(e,`tokens_mean`)),fmt:A},{label:`Avg. wall time`,vals:I.map(e=>V(e,`wall_mean`)),fmt:e=>e.toFixed(1)+`m`},{label:`Avg. graded quality (0 to 3)`,vals:I.map(e=>R[e]?.mean??0),ci:I.map(e=>R[e]?.ci??[0,0]),fmt:e=>e.toFixed(2)}],ee=[[`dsflash-pi`,`Pi`,`0.80.10`,`~20K tok · ~2.4 min`,`tops the band on quality, and nearly the leanest with it`],[`dsflash-opencode`,`OpenCode`,`1.17.10`,`~13K tok · ~1.9 min`,`the leanest and fastest of the six; squarely in the band`],[`dsflash-jcode`,`jcode`,`0.72.0`,`~35K tok · ~4.2 min`,`in the band once nudged, but no lightweight: it explores hard and spends like Claude Code`],[`dsflash-claude-local`,`Claude Code`,`2.1.186`,`~38K tok · ~6.0 min`,`tops the band within noise, for several times the cost`],[`dsflash-nanocoder`,`nanocoder`,`1.29.0`,`~62K tok · ~6.2 min`,`in the band; spends like Claude Code, local-first is not lean`],[`dsflash-claurst2`,`claurst`,`0.1.7`,`~29K tok · ~6.2 min`,`the slowest of the six, and still drops out: nearly half its headless runs commit no edit`]];var U=k();m(`fplahd`,e=>{p(()=>{i.title=`Nawk - ${E.title??``}`})});var W=a(n(U),2),te=n(W,!0);c(W);var G=a(W,4),ne=n(G);c(G);var K=a(G,2),q=a(n(K),12);w(a(n(q),2),{get series(){return M},domain:[0,3],unit:`quality`,kind:`quality`}),s(2),c(q);var J=a(q,18);w(a(n(J),2),{get series(){return P},domain:[0,1e5],unit:`tokens`}),s(2),c(J);var Y=a(J,2);w(a(n(Y),2),{get series(){return F},domain:[0,12],unit:`min`}),s(2),c(Y);var X=a(Y,10);C(a(n(X),2),{get data(){return y.data.toolmix},order:[`Pi`,`OpenCode`,`jcode`,`Claude Code`,`Nanocoder`,`claurst`]}),s(2),c(X);var Z=a(X,6);T(n(Z),{get metrics(){return H},get names(){return z},get colors(){return B},tieIdx:3}),s(2),c(Z);var Q=a(Z,6),$=n(Q);g($,21,()=>ee,h,(r,i)=>{var u=t(()=>e(o(i),5));let p=()=>o(u)[0],m=()=>o(u)[1],h=()=>o(u)[2],g=()=>o(u)[3],_=()=>o(u)[4];var y=O(),b=n(y),x=n(b),S=n(x),C=a(S,2),w=n(C,!0);c(C);var T=a(C,2),E=n(T,!0);c(T),c(x);var k=a(x,2),A=n(k,!0);s(),c(k),c(b);var j=a(b,2),M=n(j);c(j);var N=a(j,2),P=n(N,!0);c(N);var F=a(N,2),I=n(F,!0);c(F),c(y),f(e=>{v(S,`background:${D[p()]??``}`),d(w,m()),d(E,h()),d(A,e),v(M,`width:${(R[p()]?.mean??0)/3*100}%; background:${D[p()]??``}`),d(P,_()),d(I,g())},[()=>(R[p()]?.mean??0).toFixed(2)]),l(r,y)}),c($),s(2),c(Q),s(4),c(K),S(a(K,2),{current:`harness-showdown`,get totals(){return y.data.bench.totals}}),c(U),f(e=>{d(te,E.title),d(ne,`${e??``} · same model, six harnesses · updated 12 Aug`)},[()=>x(E.date)]),l(u,U),_()}export{A as component,E as universal};