
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeBlock = ({
  code,
  language = 'typescript',
  fileName,
  showLineNumbers = true,
  className,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');
  const lineCount = lines.length;
  const lineCountWidth = lineCount.toString().length * 14 + 10; // Calculate width based on number of digits

  return (
    <div className={cn("relative rounded-md overflow-hidden border border-docs-border", className)}>
      {fileName && (
        <div className="flex items-center px-4 py-2 bg-muted border-b border-docs-border text-sm">
          <span className="flex-1 text-muted-foreground">{fileName}</span>
          <div className="flex items-center gap-2">
            <div className="text-xs text-muted-foreground">{language}</div>
          </div>
        </div>
      )}
      <div className="relative bg-docs-code-background text-docs-foreground overflow-auto">
        <pre className="relative m-0 py-4">
          {showLineNumbers && (
            <div 
              className="absolute left-0 top-0 bottom-0 py-4 select-none flex flex-col items-end border-r border-docs-border pr-2 bg-muted/40 text-muted-foreground"
              style={{ width: `${lineCountWidth}px` }}
            >
              {Array.from({ length: lineCount }).map((_, i) => (
                <div key={i} className="text-xs leading-5 text-right">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code
            className={cn(
              "block text-sm leading-5",
              showLineNumbers && { marginLeft: `${lineCountWidth + 16}px` }
            )}
          >
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line || ' '}
              </div>
            ))}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-md bg-background/80 backdrop-blur-sm hover:bg-muted transition"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
