import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* ==================== */}
        {/* PHẦN 6 KHỐI MÀU */}
        {/* ==================== */}

        <View style={styles.blocks}>
          {/* Ô 1 */}
          <ColorBlock color="#2f80ed" label="1" style={styles.topBlock} />

          {/* Ô 2 */}
          <ColorBlock color="#ff3b3f" label="2" style={styles.topBlock} />

          {/* Hàng 3 - 4 - 5 - ô trắng */}
          <View style={styles.middleRow}>
            {/* Ô 3 */}
            <ColorBlock
              color="#ffd21c"
              label="3"
              labelColor="#000000"
              style={styles.columnBlock}
            />

            {/* Ô 4 */}
            <ColorBlock color="#2db36b" label="4" style={styles.columnBlock} />

            {/* Ô 5 */}
            <ColorBlock color="#7b3fe4" label="5" style={styles.columnBlock} />

            {/* Ô thứ 4 để trắng */}
            <View style={styles.columnBlock} />
          </View>

          {/* Ô 6 */}
          <ColorBlock color="#ff7412" label="6" style={styles.bottomBlock} />
        </View>

        {/* ==================== */}
        {/* HỌ TÊN - MSSV */}
        {/* ==================== */}

        <View style={styles.footer}>
          <Text style={styles.footerText}>Bui Dao Duc Anh - BIT240025</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* ============================= */
/* COMPONENT KHỐI MÀU */
/* ============================= */

function ColorBlock({
  color,
  label,
  labelColor = "#ffffff",
  style,
}: ColorBlockProps) {
  return (
    <View
      style={[
        styles.block,
        style,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: labelColor,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

/* ============================= */
/* TYPE */
/* ============================= */

type ColorBlockProps = {
  color: string;
  label: string;
  labelColor?: string;
  style?: StyleProp<ViewStyle>;
};

/* ============================= */
/* STYLE */
/* ============================= */

const styles = StyleSheet.create({
  /* Toàn màn hình */
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
  },

  /* ============================= */
  /* 6 KHỐI */
  /* ============================= */

  blocks: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    gap: 8,
  },

  /* Ô 1 và 2 */
  topBlock: {
    width: "100%",
    aspectRatio: 5.16,
  },

  /* Hàng 3 - 4 - 5 - trắng */
  middleRow: {
    width: "100%",
    aspectRatio: 2.5,
    flexDirection: "row",
    gap: 8,
  },

  /* 4 cột bằng nhau */
  columnBlock: {
    flex: 1,
  },

  /* Ô 6 */
  bottomBlock: {
    width: "100%",
    aspectRatio: 3,
  },

  /* Khối chung */
  block: {
    alignItems: "center",
    justifyContent: "center",
  },

  /* Số 1 -> 6 */
  label: {
    fontSize: 40,
    fontWeight: "700",
  },

  /* ============================= */
  /* FOOTER */
  /* ============================= */

  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 16,
  },

  footerText: {
    fontSize: 16,
    color: "#333333",
  },
});
