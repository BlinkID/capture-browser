/**
 * Copyright (c) 2024 Microblink Ltd. All rights reserved.
 *
 * ANY UNAUTHORIZED USE OR SALE, DUPLICATION, OR DISTRIBUTION
 * OF THIS PROGRAM OR ANY OF ITS PARTS, IN SOURCE OR BINARY FORMS,
 * WITH OR WITHOUT MODIFICATION, WITH THE PURPOSE OF ACQUIRING
 * UNLAWFUL MATERIAL OR ANY OTHER BENEFIT IS PROHIBITED!
 * THIS PROGRAM IS PROTECTED BY COPYRIGHT LAWS AND YOU MAY NOT
 * REVERSE ENGINEER, DECOMPILE, OR DISASSEMBLE IT.
 */

import { Component, createEffect, Show, For } from "solid-js";
import { createStore, reconcile } from "solid-js/store";
import { css } from "@acab/ecsstatic";
import { UiStateKey } from "../core/FeedbackParser";

type Score = {
  key: UiStateKey;
  score: number;
};

// TODO: this is a debug component. Figure out a better way to get the data as
// scores stop being reactive when passed through solid-zustand

// export const ScoreDisplay: Component = () => {
//   // we use a store to preserve referential identities when updating
//   const [sortedScores, setSortedScores] = createStore<Score[]>([]);

//   createEffect(() => {
//     const scores = sdkStore.scores;

//     if (!scores) {
//       setSortedScores([]);
//       return;
//     }

//     const scoreItems = Object.entries(scores)
//       .map((score) => {
//         return {
//           key: score[0],
//           score: score[1],
//         } as Score;
//       })
//       .sort((a, b) => b.score - a.score);

//     setSortedScores(reconcile(scoreItems));
//   });

//   return (
//     <Show when={sortedScores}>
//       {(scores) => (
//         <div>
//           <For each={scores()}>
//             {(score) => {
//               return (
//                 <div
//                   class={css`
//                     position: relative;
//                     font-size: 16px;
//                     line-height: 1;
//                   `}
//                 >
//                   <pre>
//                     {score.key} -- {score.score.toFixed(3)}
//                   </pre>
//                   <div
//                     class={css`
//                       width: 300px;
//                       height: 3px;
//                       background: red;
//                       transform-origin: left;
//                       transition: transform 100ms ease;
//                     `}
//                     style={{
//                       transform: `scaleX(${String(score.score)})`,
//                     }}
//                   />
//                 </div>
//               );
//             }}
//           </For>
//         </div>
//       )}
//     </Show>
//   );
// };
