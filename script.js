// 电缆标准数据：包含所有标准的详细信息
const standardsData = [
    {
        id: 1, // 标准唯一标识符
        code: "GB/T 12706.1-2020", // 标准编号
        name: "额定电压1kV(Um=1.2kV)到35kV(Um=40.5kV)挤包绝缘电力电缆及附件 第1部分：额定电压1kV(Um=1.2kV)和3kV(Um=3.6kV)电缆", // 标准名称
        type: "national", // 标准类型：国家标准
        voltage: "low", // 电压等级：低压
        year: "2020", // 发布年份
        issuer: "国家市场监督管理总局", // 发布机构
        implementDate: "2021-06-01", // 实施日期
        description: "本标准规定了额定电压1kV(Um=1.2kV)和3kV(Um=3.6kV)挤包绝缘电力电缆的结构、尺寸、技术要求和试验方法。适用于固定安装的电力电缆，用于传输和分配电能。", // 标准描述
        url: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=4B738950413A454E4347383930304779" // 标准官方链接
    },
    {
        id: 2,
        code: "GB/T 12706.2-2020",
        name: "额定电压1kV(Um=1.2kV)到35kV(Um=40.5kV)挤包绝缘电力电缆及附件 第2部分：额定电压6kV(Um=7.2kV)到35kV(Um=40.5kV)电缆",
        type: "national",
        voltage: "medium",
        year: "2020",
        issuer: "国家市场监督管理总局",
        implementDate: "2021-06-01",
        description: "本标准规定了额定电压6kV(Um=7.2kV)到35kV(Um=40.5kV)挤包绝缘电力电缆的结构、尺寸、技术要求和试验方法。适用于固定安装的电力电缆，用于传输和分配电能。",
        url: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=4B738950413A454E4347383930314779"
    },
    {
        id: 3,
        code: "GB/T 12706.3-2020",
        name: "额定电压1kV(Um=1.2kV)到35kV(Um=40.5kV)挤包绝缘电力电缆及附件 第3部分：额定电压6kV(Um=7.2kV)到35kV(Um=40.5kV)电缆附件",
        type: "national",
        voltage: "medium",
        year: "2020",
        issuer: "国家市场监督管理总局",
        implementDate: "2021-06-01",
        description: "本标准规定了额定电压6kV(Um=7.2kV)到35kV(Um=40.5kV)挤包绝缘电力电缆附件的技术要求、试验方法和验收规则。适用于电缆终端和中间接头。",
        url: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=4B738950413A454E4347383930324779"
    },
    {
        id: 4,
        code: "GB/T 5023.1-2008",
        name: "额定电压450/750V及以下聚氯乙烯绝缘电缆 第1部分：一般要求",
        type: "national",
        voltage: "low",
        year: "2008",
        issuer: "国家质量监督检验检疫总局",
        implementDate: "2009-05-01",
        description: "本标准规定了额定电压450/750V及以下聚氯乙烯绝缘电缆的一般要求，包括结构、尺寸、技术要求和试验方法。适用于固定安装或移动使用的聚氯乙烯绝缘电缆。",
        url: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=2804223C8E7D4C048E8E0FAE79E04A07"
    },
    {
        id: 5,
        code: "GB/T 5023.2-2008",
        name: "额定电压450/750V及以下聚氯乙烯绝缘电缆 第2部分：试验方法",
        type: "national",
        voltage: "low",
        year: "2008",
        issuer: "国家质量监督检验检疫总局",
        implementDate: "2009-05-01",
        description: "本标准规定了额定电压450/750V及以下聚氯乙烯绝缘电缆的试验方法，包括电气试验、机械试验、热试验和环境试验等。",
        url: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=B0224B289A4E47A7A424E09448F90D49"
    },
    {
        id: 6,
        code: "IEC 60502-1:2014",
        name: "Power cables with extruded insulation and their accessories for rated voltages from 1 kV (Um = 1.2 kV) up to 30 kV (Um = 36 kV) - Part 1: Cables for rated voltages of 1 kV (Um = 1.2 kV) and 3 kV (Um = 3.6 kV)",
        type: "international",
        voltage: "low",
        year: "2014",
        issuer: "国际电工委员会",
        implementDate: "2014-10-01",
        description: "This part of IEC 60502 specifies the requirements for power cables with extruded insulation and their accessories for rated voltages from 1 kV (Um = 1.2 kV) up to 30 kV (Um = 36 kV). It covers cables for rated voltages of 1 kV (Um = 1.2 kV) and 3 kV (Um = 3.6 kV).",
        url: "https://webstore.iec.ch/publication/60502"
    },
    {
        id: 7,
        code: "IEC 60502-2:2014",
        name: "Power cables with extruded insulation and their accessories for rated voltages from 1 kV (Um = 1.2 kV) up to 30 kV (Um = 36 kV) - Part 2: Cables for rated voltages from 6 kV (Um = 7.2 kV) up to 30 kV (Um = 36 kV)",
        type: "international",
        voltage: "medium",
        year: "2014",
        issuer: "国际电工委员会",
        implementDate: "2014-10-01",
        description: "This part of IEC 60502 specifies the requirements for power cables with extruded insulation and their accessories for rated voltages from 1 kV (Um = 1.2 kV) up to 30 kV (Um = 36 kV). It covers cables for rated voltages from 6 kV (Um = 7.2 kV) up to 30 kV (Um = 36 kV).",
        url: "https://webstore.iec.ch/publication/60502"
    },
    {
        id: 8,
        code: "JB/T 8734.1-2016",
        name: "额定电压450/750V及以下聚氯乙烯绝缘电缆电线和软线 第1部分：一般要求",
        type: "industry",
        voltage: "low",
        year: "2016",
        issuer: "中华人民共和国工业和信息化部",
        implementDate: "2017-01-01",
        description: "本标准规定了额定电压450/750V及以下聚氯乙烯绝缘电缆电线和软线的一般要求，包括结构、尺寸、技术要求和试验方法。适用于固定安装或移动使用的聚氯乙烯绝缘电缆电线和软线。",
        url: "https://openstd.samr.gov.cn/bzgk/jb/newJbInfo?hcno=5C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9C"
    }
];

// 渲染标准列表：根据传入的标准数据生成标准卡片
function renderStandards(standards = standardsData) {
    // 获取标准网格容器
    const grid = document.getElementById('standardsGrid');
    // 清空网格内容
    grid.innerHTML = '';

    // 如果没有符合条件的标准，显示提示信息
    if (standards.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #666;">未找到符合条件的标准</div>';
        return;
    }

    // 遍历标准数据，为每个标准创建卡片
    standards.forEach(standard => {
        // 创建卡片元素
        const card = document.createElement('div');
        // 设置卡片类名
        card.className = 'standard-card';
        // 设置卡片内容：包含标准标题、信息、描述和查看按钮
        card.innerHTML = `
            <h3 class="standard-title">${standard.code} - ${standard.name}</h3>
            <div class="standard-info">
                <div class="info-item"><span class="info-label">标准类型：</span>${getTypeName(standard.type)}</div>
                <div class="info-item"><span class="info-label">电压等级：</span>${getVoltageName(standard.voltage)}</div>
                <div class="info-item"><span class="info-label">发布年份：</span>${standard.year}</div>
                <div class="info-item"><span class="info-label">实施日期：</span>${standard.implementDate}</div>
            </div>
            <div class="standard-desc">${standard.description.substring(0, 100)}...</div>
            <a href="javascript:void(0)" class="view-btn" onclick="openModal(${standard.id})">查看详情</a>
        `;
        // 将卡片添加到网格中
        grid.appendChild(card);
    });
}

// 获取标准类型名称：将英文类型转换为中文
function getTypeName(type) {
    // 类型映射对象：英文类型到中文名称的映射
    const typeMap = {
        'national': '国家标准',
        'industry': '行业标准',
        'international': '国际标准'
    };
    // 返回对应的中文名称，如果没有找到则返回原类型
    return typeMap[type] || type;
}

// 获取电压等级名称：将英文电压等级转换为中文
function getVoltageName(voltage) {
    // 电压等级映射对象：英文电压等级到中文名称的映射
    const voltageMap = {
        'low': '低压',
        'medium': '中压',
        'high': '高压'
    };
    // 返回对应的中文名称，如果没有找到则返回原电压等级
    return voltageMap[voltage] || voltage;
}

// 搜索标准：根据用户输入的关键词和筛选条件搜索标准
function searchStandards() {
    // 获取搜索关键词，转换为小写
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    // 获取标准类型筛选值
    const typeFilter = document.getElementById('typeFilter').value;
    // 获取电压等级筛选值
    const voltageFilter = document.getElementById('voltageFilter').value;
    // 获取发布年份筛选值
    const yearFilter = document.getElementById('yearFilter').value;

    // 过滤标准数据：根据搜索条件筛选符合要求的标准
    const filteredStandards = standardsData.filter(standard => {
        // 检查是否匹配搜索关键词：标准编号、名称或描述中是否包含搜索关键词
        const matchesSearch = standard.code.toLowerCase().includes(searchTerm) || 
                            standard.name.toLowerCase().includes(searchTerm) || 
                            standard.description.toLowerCase().includes(searchTerm);
        // 检查是否匹配标准类型筛选：如果选择"全部"或者标准类型匹配
        const matchesType = typeFilter === 'all' || standard.type === typeFilter;
        // 检查是否匹配电压等级筛选：如果选择"全部"或者电压等级匹配
        const matchesVoltage = voltageFilter === 'all' || standard.voltage === voltageFilter;
        // 检查是否匹配发布年份筛选：如果选择"全部"或者发布年份匹配
        const matchesYear = yearFilter === 'all' || standard.year === yearFilter;

        // 返回是否同时满足所有筛选条件
        return matchesSearch && matchesType && matchesVoltage && matchesYear;
    });

    // 渲染筛选后的标准列表
    renderStandards(filteredStandards);
}

// 打开详情模态框：根据标准ID显示标准的详细信息
function openModal(id) {
    // 根据ID查找标准
    const standard = standardsData.find(s => s.id === id);
    // 如果没有找到标准，返回
    if (!standard) return;

    // 获取模态框元素
    const modal = document.getElementById('standardModal');
    // 获取模态框标题元素
    const modalTitle = document.getElementById('modalTitle');
    // 获取模态框信息元素
    const modalInfo = document.getElementById('modalInfo');
    // 获取模态框描述元素
    const modalDesc = document.getElementById('modalDesc');

    // 设置模态框标题：标准编号和名称
    modalTitle.textContent = `${standard.code} - ${standard.name}`;
    // 设置模态框信息：包含标准类型、电压等级、发布年份、发布机构、实施日期和标准链接
    modalInfo.innerHTML = `
        <div class="info-item"><span class="info-label">标准类型：</span>${getTypeName(standard.type)}</div>
        <div class="info-item"><span class="info-label">电压等级：</span>${getVoltageName(standard.voltage)}</div>
        <div class="info-item"><span class="info-label">发布年份：</span>${standard.year}</div>
        <div class="info-item"><span class="info-label">发布机构：</span>${standard.issuer}</div>
        <div class="info-item"><span class="info-label">实施日期：</span>${standard.implementDate}</div>
        ${standard.url ? `<div class="info-item"><span class="info-label">标准链接：</span><a href="${standard.url}" target="_blank" style="color: #667eea; text-decoration: none;">${standard.url}</a></div>` : ''}
    `;
    // 设置模态框描述：标准的详细描述
    modalDesc.textContent = standard.description;

    // 添加跳转到标准页面的按钮
    const modalContent = modal.querySelector('.modal-content');
    // 查找或创建按钮容器
    let btnContainer = modalContent.querySelector('.btn-container');
    if (!btnContainer) {
        btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';
        btnContainer.style.cssText = 'margin-top: 20px; text-align: right;';
        modalContent.appendChild(btnContainer);
    }
    
    // 根据是否有标准链接设置按钮内容
    if (standard.url) {
        btnContainer.innerHTML = `
            <a href="${standard.url}" target="_blank" class="view-btn" style="margin-right: 10px;">跳转到标准页面</a>
            <button onclick="closeModal()" style="padding: 8px 20px; background: #999; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">关闭</button>
        `;
    } else {
        btnContainer.innerHTML = `
            <button onclick="closeModal()" style="padding: 8px 20px; background: #999; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">关闭</button>
        `;
    }

    // 显示模态框
    modal.style.display = 'block';
}

// 关闭模态框：隐藏模态框
function closeModal() {
    document.getElementById('standardModal').style.display = 'none';
}

// 点击模态框外部关闭：当用户点击模态框背景时关闭模态框
window.onclick = function(event) {
    const modal = document.getElementById('standardModal');
    if (event.target === modal) {
        closeModal();
    }
}

// 回车键搜索：当用户在搜索输入框中按回车键时触发搜索
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchStandards();
    }
});

// 初始化页面：页面加载完成后执行
window.onload = function() {
    // 渲染标准列表：显示所有标准
    renderStandards();
};