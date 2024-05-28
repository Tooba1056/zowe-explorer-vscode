/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright Contributors to the Zowe Project.
 *
 */

import { Given } from "@cucumber/cucumber";

Given("a user who is looking at the Zowe Explorer tree views", async () => {
    const activityBar = (await browser.getWorkbench()).getActivityBar();
    await activityBar.wait();
    const zeContainer = await activityBar.getViewControl("Zowe Explorer");
    await zeContainer.wait();
    const zeView = await zeContainer.openView();
    await zeView.wait();
});
