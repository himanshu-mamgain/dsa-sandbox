
export const BackButton = (target: string = '', label: string = 'Back to Dashboard') => `
<div class="sticky-header">
    <button class="back-button" onclick="location.hash = '${target}'">
      <span>←</span> ${label}
    </button>
</div>
`;

export const PageLayout = (content: string, backTarget: string = '', backLabel: string = 'Back to Dashboard') => `
    <div class="content-container" style="max-width: 1000px;">
        ${BackButton(backTarget, backLabel)}
        ${content}
    </div>
`;
