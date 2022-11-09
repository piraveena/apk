/*
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.wso2.apk.apimgt.impl.dao.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public final class DBUtils {
    private static Log log = LogFactory.getLog(DBUtils.class);

    private DBUtils() {
    }

    public static String getConvertedAutoGeneratedColumnName(String dbProductName, String columnName) {
        String autoGeneratedColumnName = columnName;
        if ("PostgreSQL".equals(dbProductName)) {
            autoGeneratedColumnName = columnName.toLowerCase();
            if (log.isDebugEnabled()) {
                log.debug("Database product name is PostgreSQL. Converting column name " + columnName
                        + " to lowercase (" + autoGeneratedColumnName + ").");
            }
        }
        return autoGeneratedColumnName;
    }
}
