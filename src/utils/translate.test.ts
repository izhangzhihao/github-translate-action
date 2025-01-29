import { translate } from './translate';

describe('translate function', () => {
  it('should translate text to English', async () => {
    const text = `### Have you checked the issues and discussions to ensure there are no duplicates?

Yes

### Are you using JetBrains Client / Code With Me / IntelliJ Remote Development?

JetBrains Client

### Your programming languages

java

### Free or paid?

Paid users

### Expected Behavior

授权检查有问题，会将Manifold识别为有问题的插件 https://plugins.jetbrains.com/plugin/10057-manifold 

### Current Behavior

![PixPin_2024-12-14_16-50-40](https://github.com/user-attachments/assets/8011af2f-4687-4664-a85c-2ee41ddaf69d)


### Code snippet for reproduce

\`\`\`shell
N/A
\`\`\`


### Your Environment

\`\`\`shell
IntelliJ IDEA 2024.3.1 (Ultimate Edition)
Build #IU-243.22562.145, built on December 9, 2024
Licensed to Danny Su
Subscription is active until April 30, 2025.
Runtime version: 21.0.5+8-b631.28 aarch64 (JCEF 122.1.9)
VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
Toolkit: sun.lwawt.macosx.LWCToolkit
macOS 15.2
Kotlin plugin: K2 mode
Jenkins Plugin 0.13.20-2023.2
GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
Memory: 4096M
Cores: 12
Metal Rendering is ON
Registry:
  debugger.mayBringFrameToFrontOnBreakpoint=false
  debugger.new.tool.window.layout=true
  suggest.all.run.configurations.from.context=true
  ide.experimental.ui=true
  idea.ignore.disabled.plugins=true
  i18n.locale=
  editor.minimap.enabled=true
  feature.suggester.enable.suggesters=true
  terminal.new.ui=true
  eslint.additional.file.extensions=svelte
Non-Bundled Plugins:
  com.intellij.javafx (1.0.4)
  com.intellij.plugins.macoskeymap (241.13688.16)
  Keymap exporter (2.7)
  com.intellij.plugins.vscodekeymap (243.21565.122)
  SerialPortMonitor (243.22562.187)
  com.intellij.ideolog (243.22562.180)
  hunspell (243.22562.187)
  com.jetbrains.fast.mouse.scroll (1.6.1)
  com.jetbrains.evaluation.scratcher (1.6-SNAPSHOT)
  com.jetbrains.plugins.ini4idea (243.22562.180)
  com.jetbrains.TabFormat (0.6)
  org.intellij.plugins.hcl (243.22562.13)
  detekt (2.4.2)
  com.smallcloud.codify (5.2.2)
  wallaby.js (1.0.312)
  lermitage.intellij.ilovedevtoys (1.11.0)
  com.github.catppuccin.jetbrains (3.4.0)
  co.anbora.labs.todo.export (1.6.1)
  com.gafner.giv (2024.3.4)
  com.codeium.intellij (1.30.2)
  com.facebook.ktfmt_idea_plugin (1.2.0.53)
  com.couchbase.couchbase-intellij-plugin (1.1.5)
  ca.rightsomegoodgames.GoldenRatio (1.1.0)
  org.mvnsearch.plugins.justPlugin (0.6.8)
  com.mituuz.fuzzier (1.3.0)
  io.microconfig.idea-plugin (1.6.2)
  com.redhat.devtools.lsp4ij (0.8.1)
  com.uroozgeek.gitproxytogglerjb (0.0.3)
  aws.toolkit.core (3.45-243)
  com.jetbrains.space (243.21565.122)
  lermitage.ij.all.pack (2024.12.2)
  com.github.warningimhack3r.npmupdatedependencies (3.6.1)
  com.protobuf.free.gen.plugin.GenProtobuf (2.0.1)
  community.flock.wirespec.lsp.intellij_plugin (0.10.22)
  io.github.mishkun.ataman-plugin (1.3.0)
  Statistic (4.3.2)
  io.nimbly.i18n (10.5.0)
  AceJump (3.8.19)
  IdeaVIM (2.17.0)
  IdeaVimExtension (1.7.4)
  com.julienphalip.ideavim.peekaboo (1.0.2)
  org.jetbrains.IdeaVim-EasyMotion (1.16)
  com.github.jcraane.fasttravel (1.0.2)
  com.fwdekker.randomness (3.3.3)
  com.jetbrains.gerryThemesPro (2024.1.1206)
  Batch Scripts Support (1.0.13)
  intellij-awk (0.4.5)
  com.github.continuedev.continueintellijextension (0.0.83)
  imiatselski.idea_find_in_files_ignoring_whitespaces_plugin (0.1.4)
  wu.seal.tool.jsontokotlin (3.7.6)
  com.jetbrains.embeddedProjectJdk (2.5)
  com.kagof.pokeprogress (2.1.1)
  com.andrewbrookins.wrap_to_column (1.9.1)
  ca.alexgirard.HarpoonIJ (0.2.0)
  me.x150.intellij-code-screenshots (1.4.8)
  org.yelog.ideavim.flash (0.0.5)
  quokka.js (1.0.468)
  com.dekonoplyov.KeymapNationalizer (0.3.1)
  dev.priporov.idea.notes (1.5.3)
  lermitage.intellij.iconviewer (1.31.1)
  name.kropp.intellij.makefile (243.21565.122)
  nl.bryanderidder.regexrenamefiles (1.3.2)
  io.github.will7200.plugins.casbin (0.1.16)
  dev.eltonsandre.redis-mananger (2023.0.6)
  com.mallowigi.imageicon (15.0.0)
  com.tabnine.TabNine (1.174.0)
  com.robohorse.robopojogenerator (2.6.3)
  org.intellij.RegexpTester (2.2.0)
  com.werfad (1.0.3)
  com.intellij.grazie.pro (0.3.351)
  com.noorts.toggler (1.4.1)
  com.previewjs.intellij.plugin (1.28.3)
  com.intellij.notebooks.core (243.22562.187)
  intellij.jupyter (243.22562.145)
  com.github.patou.gitmoji (2.2.2)
  com.github.lppedd.idea-conventional-commit (0.23.1)
  com.github.lppedd.idea-conventional-commit-commitlint (0.1.2)
  com.jetbrains.php.framework (243.22562.180)
  com.crunch42.openapi (1.94)
  com.alexey-anufriev.scopes-manager-intellij-plugin (1.9.11)
  org.antlr.intellij.plugin (1.24)
  com.intellij.plugins.mnemonicKeymap (2023.1.0)
  com.jetbrains.webstorm.web-assembly-plugin (243.21565.122)
  org.jetbrains.plugins.rest (243.21565.122)
  PythonCore (243.22562.145)
  net.bondoc.tools.changelogchecker (0.0.6)
  zielu.gitworktree (1.0.10+231)
  uk.co.ben-gibson.remote.repository.mapper (4.5.2)
  mobi.hsz.idea.gitignore (4.5.4)
  com.atlassian.bitbucket.references (2023.1.304)
  com.joshestein.ideavim-quickscope (1.0.12)
  org.elasticsearch4idea (2024.1.5-243)
  com.github.wenzewoo.jetbrains.plugin.jetbrains-markdown-image-support (1.4.1-SNAPSHOT)
  com.supermaven.intellij (1.43)
  DevKit (243.22562.145)
  com.bloc.intellij_generator_plugin (4.0.2)
  palantir-java-format (2.50.0)
  software.xdev.saveactions (1.4.0)
  io.github.askmeagain.mapstructor (1.1.0)
  com.dguner.lombok-builder-helper (1.5.0)
  com.symflower.symflower (44186)
  com.github.camork.fileExpander (2.5)
  com.sunny.plugin.MockitoGenPlugin (1.5.4)
  com.jetbrains.hackathon.indices.viewer (1.29)
  google-java-format (1.25.2.0)
  org.jetbrains.jumpToLine (0.1.17)
  ru.artyushov (1.6.0)
  jclasslib (6.0.5.1)
  manifold.ij (2024.1.13)
  coderead.IdeaPlugins.maven (1.2)
  dev.khbd.interp4j-intellij-plugin (v0.1.19_2024.3)
  com.github.wangji92.arthas.plugin (2.49)
  CheckStyle-IDEA (5.99.0)
  com.k.pmpstudy.RenameFilesRefactorBatch (1.0.14)
  org.jetbrains.plugins.workspace (243.21565.129)
  com.liubs.jaredit (2.2.0)
  org.jetbrains.idea.grammar (2022.3.2)
  PlantUML integration (7.11.2-IJ2023.2)
  com.chylex.intellij.inspectionlens (1.4.1)
  com.haulmont.jpab (243.22562.145)
  com.intellij.jakarta.nosql (243.21565.129)
  com.jetbrains.jax.ws (243.21565.129)
  com.intellij.spring.shell (243.21565.129)
  com.intellij.spring.websocket (243.21565.129)
  com.intellij.spring.webflow (243.22562.145)
  com.intellij.datagen (243.21565.122)
  com.github.ragurney.spotless (2.0.0)
  org.jetbrains.amper (243.22562.13)
  dev.turingcomplete.intellij-gradle-utilities-plugin (1.2.5)
  org.jvmlet.intellij.reveal-dependency-plugin (1.7.0)
  ink.organics.pojo2json (2.1.1)
  String Manipulation (9.15.0)
  Jenkins Control Plugin (0.13.20-2023.2)
  org.jetbrains.plugins.kotlin.jupyter (243.22562.145)
  com.kimen.plugin (1.3.6)
  com.intellij.properties.bundle.editor (243.21565.122)
  com.github.blarc.ai-commits-intellij-plugin (2.9.0)
  dev.turingcomplete.intellijjvmsmanagerplugin (2.3.0)
  com.intellij.javaee.webSocket (243.22562.13)
  com.cppcxy.Intellij-SumnekoLua (3.13.0.43-IDEA243)
  Pythonid (243.22562.145)
  com.jetbrains.twig (243.22562.180)
  com.intellij.mermaid (0.0.24+IJ.243)
  de.achimonline.github_markdown_emojis (1.4.0)
  com.majera.intellij.codereview.bitbucket (2024.4.1.243)
  com.jetbrains.writerside (2024.12.243.22562.163)
  com.intellij.javaee.ejb (243.22562.13)
  com.intellij.jsf (243.21565.129)
  Dart (243.23177)
  dev.blachut.svelte.lang (243.22562.13)
  mdx.js (243.21565.120)
  com.haulmont.rcb (243.22562.59)
  deno (243.22562.13)
  com.nekofar.milad.intellij.nestjs (1.3.2)
  tv.twelvetone.intellij.plugins.intellivue (1.2.23)
  com.nekofar.milad.intellij.nuxtjs (2.1.3)
  com.intellij.lang.jsgraphql (243.22562.13)
  org.mvnsearch.jetbrains.plugins.httpx-jetbrains-plugin (0.21.0)
  com.intellij.aqua (243.22562.155)
  com.intellij.javaee.batch (243.21565.129)
  com.intellij.plugins.html.instantEditing (243.22562.145)
  com.intellij.exposed (243.22562.13)
  ch.repolevedavaj.projectenv.intellijplugin (4.7.1)
  gradle-consistent-versions (0.10.0)
  com.github.lipiridi.spotless-applier (1.1.4)
  ch.newinstance.plugin.mavendependencychecker (1.14.0)
  Osmorc (243.22562.13)
  com.squaretest.Squaretest (1.8.14)
  gherkin (243.22562.13)
  cucumber-javascript (243.21565.122)
  com.baidu.comate (3.0.6)
  R4Intellij (243.22562.187)
  com.metalbear.mirrord (3.64.2)
  com.intellij.spring.batch (243.21565.129)
  org.asciidoctor.intellij.asciidoc (0.43.3)
  XSLT-Debugger (243.21565.122)
  cucumber-java (243.22562.13)
  com.example.JumpingLines (2.2)
  GrepConsole (13.2.0-IJ2023.3)
  W3Validators (243.21565.120)
  net.seesharpsoft.intellij.plugins.csv (4.0.1)
  com.bruce.easycode.mybatiscodehelper (1.4.0+232)
  com.intellij.spring.osgi (243.21565.129)
  com.intellij.spring.ws (243.22562.13)
  com.github.yusufugurozbek.testcontainers.port.updater (1.1.6)
  com.intellij.queryComplexity (243.21565.122)
  com.github.t-kameyama.db-to-kotlin-class (1.4.0)
  com.intellij.tide (243.22562.164)
  MyBatisLog (2024.10.1)
  org.sonarlint.idea (10.13.1.80133)
  com.intellij.bigdatatools.core (243.22562.145)
  com.intellij.bigdatatools.binary.files (243.21565.129)
  com.intellij.bigdatatools.rfs (243.22562.145)
  com.intellij.bigdatatools.metastore.core (243.21565.129)
  com.intellij.bigdatatools.spark (243.22562.145)
  com.intellij.nativeDebug (243.22562.145)
  org.mapstruct.intellij (1.8.0)
  dev.turingcomplete.intellijbytecodeplugin (4.2.1)
  com.xiaolvpuzi.tool.smartinputpro (1.1.3)
  com.github.healarconr.loggerfolding (0.6.0)
  ai.codegeex.plugin (2.19.0-223)
  com.github.ArtsiomCh.KDocCleanRead (233.1)
  cn.apipost.Apipost-idea-plugin-2.0 (1.0.23.2)
  com.zys.http (242-1.9.5)
  com.github.catppuccin.jetbrains_icons (1.10.0)
  it.aliut.kotlincollectionsizes (0.0.5)
  com.github.evgenys91.machinet (2022.1.72)
  com.bruce.intellijplugin.generatesetter (2.8.4)
  net.lagerwey.cucumber-kotlin (2024.3.0)
  io.github.newhoo.restkit (5.4.0)
  ru.adelf.idea.dotenv (2024.3)
  LivePlugin (0.9.4 beta)
  com.hxl.plugin.cool-request (2024.12.1)
  net.labymod.intellij.singlehotswap (2.9)
  de.marhali.easyi18n (4.7.0)
  org.norbye.tor.kdocformatter (1.6.5)
  com.alibabacloud.intellij.cosy (1.4.14)
  dev.jbang.intellij.JBangPlugin (0.24.8)
  com.faendir.intellij.gradle-version-catalogs-plugin (1.4.0)
  csense.idea.kotlin-not-highlighter (2.4.0)
  com.clutcher.comments_highlighter (2024.3.1)
  com.jetbrains.hktn23.ij-nav-history (0.4.7)
  org.jetbrains.android (243.22562.145)
  com.finanteq.plugins.idea.cucumber-kotlin-idea-plugin (243.1)
  com.tabbyml.intellij-tabby (1.9.0)
  io.github.andrelmv.plugin.inlay (1.0.5)
  dev.turingcomplete.intellijdevelopertoolsplugins (6.0.1)
  com.github.goldsubmarine.restfulhelper (0.4.7-stable)
  io.github.kings1990.FastRequest (2024.1.9)
  ru.rzn.gmyasoedov.gmaven (242.5)
  com.intellij.graalvm (243.21565.129)
  com.sourcegraph.jetbrains (7.5.6)
  org.intellij.scala (2024.3.22)
  com.github.shiraji.yaemoji (1.1.2)
  com.mallowigi.colorHighlighter (18.1.0)
  com.github.danielwegener.cucumber-scala (2024.3)
  codiumai.codiumai (0.12.3)
  amazon.q (3.45-243)
  com.nasller.CodeGlancePro (1.9.4)
  de.endrullis.idea.postfixtemplates (2.21.0.242)
  com.apifox.uploader (2.0.5-243)
  cn.yiiguxing.plugin.translate (3.6.7)
  com.intellij.bigdatatools.kafka (243.22562.145)
  com.ccnode.codegenerator.MyBatisCodeHelperPro (3.3.7+2321)
  com.intellij.spring.graphql (243.21565.129)
  com.jetbrains.lets-plot-intellij-plugin (1.1.25.242)
  com.github.copilot (1.5.29.7524)
  izhangzhihao.rainbow.brackets (2024.2.8-241)
  pro.bashsupport (4.5.0.243)
  com.github.lppedd.idea-return-highlighter (0.8.3)
  zielu.gittoolbox (600.0.9+243)
  aws.toolkit (3.45-243)
  dev.nx.console (1.35.0)
Kotlin: 243.22562.145-IJ
\`\`\``;
    const result = await translate(text);
    console.log(result);
    expect(result).not.toBeUndefined();
  }, 200000);

  it('should translate comment to English', async () => {
    const text = `雀食可以，就是有点慢@@====`;
    const result = await translate(text);
    console.log(result);
    expect(result).not.toBeUndefined();
  }, 200000);
});