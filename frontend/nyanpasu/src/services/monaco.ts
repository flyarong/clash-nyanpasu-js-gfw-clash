// features
import "monaco-editor/esm/vs/editor/editor.all.js";

// langs
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js";
import "monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js";

// language services
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js";

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export { monaco };
