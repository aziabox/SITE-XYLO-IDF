import type { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';

/**
 * Enveloppe les tableaux issus du Markdown dans un conteneur défilable.
 *
 * Sans cela, un tableau large déborde sur mobile, et le fond de l'en-tête ne
 * couvre pas toute la largeur lorsqu'on rend le tableau lui-même défilable.
 */
export default function rehypeTableaux() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent: any) => {
      if (node.tagName !== 'table' || !parent || index === null || index === undefined) return;
      if (parent.type === 'element' && (parent as Element).properties?.className?.toString().includes('table-scroll')) return;
      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-scroll'], role: 'region', tabIndex: 0, 'aria-label': 'Tableau, défilable horizontalement' },
        children: [node],
      };
      parent.children[index] = wrapper;
    });
  };
}
