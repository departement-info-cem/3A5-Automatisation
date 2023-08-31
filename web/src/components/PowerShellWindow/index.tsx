import React, { type ReactNode } from "react";

import "prismjs/themes/prism-dark.css";
import CopyButton from "@theme/CodeBlock/CopyButton";

import styles from "./styles.module.css";
import Logo from "./assets/logo.svg";

interface Props {
  children: ReactNode;
  command: string;
  result: string;
}

export default function PowerShellWindow({
  children,
  command,
  result,
}: Props): JSX.Element {
  console.log(children);

  return (
    <div className={styles.powerShellWindow}>
      <div className={styles.powerShellWindowHeader}>
        <div className={styles.windowTitle}>
          <Logo className={styles.logo} />
          Windows PowerShell
        </div>
        <div className={styles.powerShellWindowAddressBar}></div>
        <div className={styles.buttons}>{/* TODO Boutons Windows ICI */}</div>
      </div>

      <div className={styles.powerShellWindowBody}>
        <div className={styles.firstLine}>
          PS C:\Users\BennyLeChien&gt;
          {` ${command}`}
          <div className={styles.spacer}></div>
          <CopyButton className={styles.copyButton} code={command}></CopyButton>
        </div>

        <pre className={styles.codeContainer}>
          <code>{result}</code>
        </pre>
      </div>
    </div>
  );
}
